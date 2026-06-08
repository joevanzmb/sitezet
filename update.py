import sys
import re

with open('views/index.ejs', 'r') as f:
    content = f.read()

start_marker = '<!-- Expanding Interactive Flex Accordion -->'
end_marker = '<!-- Services Overview -->'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    section = content[start_idx:end_idx]

    # Replace tabindex="0" with JS toggle
    onclick_code = 'onclick="if(window.innerWidth < 1024) { const isActive = this.classList.contains(\'is-expanded\'); this.parentElement.querySelectorAll(\'.group\').forEach(c => c.classList.remove(\'is-expanded\')); if(!isActive) this.classList.add(\'is-expanded\'); }"'
    section = section.replace('tabindex="0"', onclick_code)

    # Replace focus: with [&.is-expanded]:
    section = section.replace('focus:', '[&.is-expanded]:')
    
    # Replace group-focus: with group-[.is-expanded]:
    section = section.replace('group-focus:', 'group-[.is-expanded]:')

    # Wrap the title/icon area
    section = section.replace(
        '<div class="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6">',
        '<div class="flex flex-row lg:flex-col items-center lg:items-start justify-between w-full lg:w-auto gap-4">\n                            <div class="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6">'
    )

    # Insert the chevron arrow and close the wrapper
    pattern = r'(</h4>\s*</div>)(\s*<div class="grid grid-rows-\[0fr\])'
    replacement = r'''\1
                            <div class="block lg:hidden shrink-0">
                                <i data-lucide="chevron-down" class="w-6 h-6 text-slate-400 transition-transform duration-500 group-[.is-expanded]:rotate-180"></i>
                            </div>
                        </div>\2'''
    section = re.sub(pattern, replacement, section)

    new_content = content[:start_idx] + section + content[end_idx:]
    with open('views/index.ejs', 'w') as f:
        f.write(new_content)
    print("Modifications applied successfully.")
else:
    print("Section not found.")
