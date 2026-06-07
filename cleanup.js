const fs = require('fs');
const path = require('path');

console.log("Menghapus file HTML lama dan script migrasi yang tidak dibutuhkan...");

const filesToDelete = [
    'index.html',
    'about.html',
    'services.html',
    'works.html',
    'contact.html',
    'migrate.py',
    'move_files.js',
    'move_files.py',
    'replace_process.py',
    'replace_services.py',
    'update_design.py'
];

let deletedCount = 0;
for (const file of filesToDelete) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath);
            console.log(`✓ Terhapus: ${file}`);
            deletedCount++;
        } catch (e) {
            console.error(`Gagal menghapus ${file}:`, e.message);
        }
    }
}

console.log(`\nSelesai! Berhasil menghapus ${deletedCount} file yang tidak dibutuhkan.`);
