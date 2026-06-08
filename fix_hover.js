const fs = require('fs');
let content = fs.readFileSync('views/index.ejs', 'utf-8');

// Find the section containing the cards
let startIndex = content.indexOf('<!-- Expanding Interactive Flex Accordion -->');
let endIndex = content.indexOf('<!-- Services Overview -->');

if (startIndex !== -1 && endIndex !== -1) {
    let section = content.substring(startIndex, endIndex);

    // Add tabindex="0" and outline-none to the card wrappers
    section = section.replace(/class="group relative flex-1/g, 'tabindex="0" class="group relative flex-1 outline-none');

    // Add focus variants for the card wrapper itself
    section = section.replace(/hover:flex-\[4\]/g, 'hover:flex-[4] focus:flex-[4]');
    section = section.replace(/hover:shadow-xl hover:shadow-teal-900\/5/g, 'hover:shadow-xl focus:shadow-xl hover:shadow-teal-900/5 focus:shadow-teal-900/5');

    // Add group-focus variants for children
    section = section.replace(/group-hover:opacity-\[0\.08\]/g, 'group-hover:opacity-[0.08] group-focus:opacity-[0.08]');
    section = section.replace(/group-hover:opacity-100/g, 'group-hover:opacity-100 group-focus:opacity-100');
    section = section.replace(/group-hover:scale-110/g, 'group-hover:scale-110 group-focus:scale-110');
    section = section.replace(/lg:group-hover:scale-125/g, 'lg:group-hover:scale-125 lg:group-focus:scale-125');
    section = section.replace(/group-hover:bg-teal-600/g, 'group-hover:bg-teal-600 group-focus:bg-teal-600');
    section = section.replace(/group-hover:text-white/g, 'group-hover:text-white group-focus:text-white');
    section = section.replace(/group-hover:border-teal-500/g, 'group-hover:border-teal-500 group-focus:border-teal-500');
    section = section.replace(/group-hover:shadow-xl/g, 'group-hover:shadow-xl group-focus:shadow-xl');
    section = section.replace(/group-hover:shadow-teal-500\/30/g, 'group-hover:shadow-teal-500/30 group-focus:shadow-teal-500/30');
    section = section.replace(/group-hover:grid-rows-\[1fr\]/g, 'group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]');
    section = section.replace(/group-hover:mt-4/g, 'group-hover:mt-4 group-focus:mt-4');
    section = section.replace(/group-hover:translate-y-0/g, 'group-hover:translate-y-0 group-focus:translate-y-0');

    // Replace the section back into content
    content = content.substring(0, startIndex) + section + content.substring(endIndex);
    fs.writeFileSync('views/index.ejs', content);
    console.log("Replaced successfully.");
} else {
    console.log("Could not find section.");
}
