const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const partialsDir = path.join(viewsDir, 'partials');

if (!fs.existsSync(viewsDir)) fs.mkdirSync(viewsDir);
if (!fs.existsSync(partialsDir)) fs.mkdirSync(partialsDir);

const files = ['index.html', 'about.html', 'services.html', 'works.html', 'contact.html'];

let headerEjs = '';
let footerEjs = '';

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    let headerMatch = content.match(/<!DOCTYPE html>[\s\S]*?id="mobile-menu-overlay"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
    // index.html has an extra wrapper div, so it might need different parsing
    let headerEndIndex = -1;
    let footerStartIndex = content.indexOf('<!-- Minimalist Dark Footer -->');
    if (footerStartIndex === -1) {
        footerStartIndex = content.indexOf('<!-- Footer -->');
    }

    // To find where the header exactly ends, we can look for the closing tag of mobile-menu-overlay.
    const overlayIndex = content.indexOf('id="mobile-menu-overlay"');
    if (overlayIndex !== -1) {
        // let's just find the next <!-- section to determine where main content starts
        const nextCommentIndex = content.indexOf('<!--', overlayIndex + 1);
        if (nextCommentIndex !== -1) {
            headerEndIndex = nextCommentIndex;
        }
    }

    if (file === 'index.html' && headerEndIndex !== -1 && footerStartIndex !== -1) {
        headerEjs = content.substring(0, headerEndIndex);
        // index.html has some page-specific styles in <head>. Let's abstract that if we want, or just keep index.html's header as the main header.
        
        // Wait, footer also has script tags at the bottom.
        footerEjs = content.substring(footerStartIndex);
        
        // Let's modify footerEjs to use <%- currentRoute %> if needed, or keep it generic
    }
}

// Ensure we have extracted them
if (headerEjs) {
    // Inject <title> logic? Let's just leave it as is for now.
    fs.writeFileSync(path.join(partialsDir, 'header.ejs'), headerEjs);
}
if (footerEjs) {
    // Let's remove the script block with translations from footer if it's there, 
    // actually, let's keep it but remove the translations block that is duplicated in some files, or just keep it.
    // The footer extracted from index.html is good.
    fs.writeFileSync(path.join(partialsDir, 'footer.ejs'), footerEjs);
}

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    let overlayIndex = content.indexOf('id="mobile-menu-overlay"');
    let headerEndIndex = content.indexOf('<!--', overlayIndex + 1);
    let footerStartIndex = content.indexOf('<!-- Minimalist Dark Footer -->');
    if (footerStartIndex === -1) {
        footerStartIndex = content.indexOf('<!-- Footer -->');
    }
    
    if (headerEndIndex !== -1 && footerStartIndex !== -1) {
        let mainContent = content.substring(headerEndIndex, footerStartIndex);
        
        let ejsContent = `<%- include('partials/header') %>\n\n${mainContent}\n\n<%- include('partials/footer') %>`;
        
        // write to views/
        let newName = file.replace('.html', '.ejs');
        fs.writeFileSync(path.join(viewsDir, newName), ejsContent);
    }
}

console.log("Migration to EJS completed successfully.");
