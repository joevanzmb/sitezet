const fs = require('fs');
const file = 'views/index.ejs';
let content = fs.readFileSync(file, 'utf8');

// Find the section
const startStr = '<!-- Expanding Interactive Flex Accordion -->';
const endStr = '<!-- Services Overview -->';
const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    let section = content.slice(startIdx, endIdx);
    
    // Replace group-hover with lg:group-hover (unless it's already lg:group-hover)
    section = section.replace(/lg:group-hover:/g, 'TEMP_LG_GH_');
    section = section.replace(/group-hover:/g, 'lg:group-hover:');
    section = section.replace(/TEMP_LG_GH_/g, 'lg:group-hover:');

    content = content.slice(0, startIdx) + section + content.slice(endIdx);
    fs.writeFileSync(file, content);
    console.log("Replaced hover classes successfully.");
} else {
    console.log("Section not found.");
}
