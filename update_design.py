import re

with open('index.html', 'r') as f:
    content = f.read()

# 1. Fonts
content = re.sub(
    r'<link href="https://fonts.googleapis.com/css2\?family=Poppins:[^"]+" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet">',
    content
)

# 2. Tailwind config
old_config = """                        teal: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            400: '#2dd4bf',
                            500: '#14b8a6',
                            600: '#0d9488',
                            900: '#134e4a',
                        },"""
new_config = """                        teal: {
                            50: '#F0F5FF',
                            100: '#E5EDFF',
                            400: '#3366FF',
                            500: '#0047FF',
                            600: '#003CE6',
                            900: '#001A66',
                        },"""
content = content.replace(old_config, new_config)

# Update font family in tailwind config
content = content.replace("sans: ['Poppins', 'sans-serif'],", "sans: ['Plus Jakarta Sans', 'sans-serif'],\n                        display: ['Syne', 'sans-serif'],")

# Update pulse-glow color
content = content.replace("rgba(20, 184, 166,", "rgba(0, 71, 255,")

# 3. Custom CSS
old_css = """        body {
            background-color: #f8fafc;
            color: #0f172a;
        }"""
new_css = """        body {
            background-color: #FAFAFA;
            color: #0f172a;
        }
        h1, h2, h3, h4, h5, .font-display {
            font-family: 'Syne', sans-serif;
            letter-spacing: -0.03em;
        }"""
content = content.replace(old_css, new_css)

# Update gradient of scroll progress
content = content.replace("linear-gradient(90deg, #0d9488, #2dd4bf)", "linear-gradient(90deg, #003CE6, #3366FF)")
content = content.replace("color: #0d9488;", "color: #0047FF;") # typing cursor

# 4. Rounded classes for services
content = content.replace("rounded-[2rem]", "rounded-2xl")
content = content.replace("rounded-[2.5rem]", "rounded-2xl")

# 5. Translations
import json

old_translations_block = re.search(r'const translations = \{.*?\n        \};', content, re.DOTALL)

if old_translations_block:
    new_translations = """const translations = {
            en: {
                nav_home: "Home", nav_expertise: "Capabilities", nav_process: "Methodology", nav_works: "Projects", nav_vision: "Vision", nav_cta: "Start Project",
                hero_badge: `<i data-lucide="zap" class="w-4 h-4 text-teal-500"></i> Digital Product Studio`,
                hero_title_1: "Engineering ", hero_title_2: "the digital edge.",
                hero_desc: "We partner with ambitious brands to design, engineer, and scale intuitive digital platforms that drive real business value.",
                hero_btn_explore: "View Projects", hero_btn_process: "Our Capabilities", hero_system_active: "System Active",
                trusted_by: "Partnering with forward-thinking teams",
                srv_badge: "Capabilities", srv_title: "End-to-End Solutions.",
                srv_desc: "Combining strategic design with robust engineering to solve complex business challenges.",
                srv_1_title: "Web Applications", srv_1_desc: "High-performance SPA and complex platforms built on modern stacks (React, Vue, Laravel), tailored exactly to your operational needs.",
                srv_2_title: "Systems Integration", srv_2_desc: "Seamlessly connecting APIs, legacy systems, and tools for unified infrastructure.",
                srv_3_title: "Product Design (UI/UX)", srv_3_desc: "Data-driven interfaces prioritizing user flow, aesthetics, and accessibility.",
                srv_4_title: "Have a complex problem?", srv_4_desc: "Let's architect the solution together.",
                process_badge: "Methodology", process_title: "How We Operate.",
                proc_1_t: "Discovery", proc_1_d: "Understanding your business goals and user needs.",
                proc_2_t: "Design", proc_2_d: "Prototyping pixel-perfect and intuitive interfaces.",
                proc_3_t: "Engineering", proc_3_d: "Writing clean, scalable, and secure code architecture.",
                proc_4_t: "Deployment", proc_4_d: "Launching to production and continuous support.",
                works_badge: "Featured Projects", works_title: "Selected Work.", works_view_all: "View All Projects",
                works_p1_title: "Enterprise Hub Platform", works_p1_desc: "A comprehensive management portal streamlining daily operations, user roles, and data analytics into one intuitive interface. Built for scale.",
                faq_badge: "FAQ", faq_title: "Common Questions",
                q1: "What is the typical timeline for a custom project?", a1: "Depending on complexity, typical web platforms take between 4 to 8 weeks from discovery to launch.",
                q2: "Do you offer post-launch support and maintenance?", a2: "Absolutely. We provide continuous maintenance packages to ensure your platform remains secure and up-to-date.",
                q3: "What technology stack do you specialize in?", a3: "We are experts in modern stacks including Laravel, Livewire, React, Tailwind CSS, and scalable cloud infrastructures.",
                q4: "Can you redesign our existing website?", a4: "Yes! We specialize in redesigning legacy websites into modern, responsive platforms while preserving your SEO rankings and migrating all existing content seamlessly.",
                q5: "How do you handle project communication?", a5: "We use real-time collaboration tools with weekly sprint reviews. You'll have a dedicated project manager and access to our progress dashboard 24/7.",
                stat_1: "Projects Delivered", stat_2: "Client Satisfaction", stat_3: "Years Experience", stat_4: "Technical Support",
                srv_5_title: "E-Commerce Systems", srv_5_desc: "End-to-end online store development with payment gateway integration, inventory management, and conversion-optimized checkout flows.",
                srv_6_title: "Performance & SEO", srv_6_desc: "Core Web Vitals optimization, technical SEO audits, and blazing-fast loading times. We ensure your site ranks higher and converts better.",
                tech_badge: "Tech Stack", tech_title: "Tools We Master.",
                vis_quote: `"We don't just write code; we architect digital ecosystems. Our focus is on pristine code quality and intuitive design that solves real problems."`,
                vis_role: "Lead Engineer & Founder",
                ft_title: `Ready to build something <br class="hidden sm:block"/> <span class="text-white font-bold">impactful</span> together?`, ft_btn: "Start a project", ft_dir: "Directory", ft_soc: "Socials"
            },
            id: {
                nav_home: "Beranda", nav_expertise: "Kapabilitas", nav_process: "Metodologi", nav_works: "Proyek", nav_vision: "Visi", nav_cta: "Mulai Proyek",
                hero_badge: `<i data-lucide="zap" class="w-4 h-4 text-teal-500"></i> Studio Produk Digital`,
                hero_title_1: "Membangun ", hero_title_2: "masa depan digital.",
                hero_desc: "Kami bermitra dengan brand ambisius untuk merancang, mengembangkan, dan menskalakan platform digital yang intuitif dan berdampak nyata.",
                hero_btn_explore: "Lihat Proyek", hero_btn_process: "Kapabilitas Kami", hero_system_active: "Sistem Aktif",
                trusted_by: "Bermitra dengan tim-tim inovatif",
                srv_badge: "Kapabilitas", srv_title: "Solusi Menyeluruh.",
                srv_desc: "Menggabungkan desain strategis dengan rekayasa sistem yang tangguh untuk memecahkan tantangan bisnis.",
                srv_1_title: "Aplikasi Web", srv_1_desc: "Platform kompleks berkinerja tinggi yang dibangun di atas stack modern (React, Vue, Laravel), disesuaikan dengan kebutuhan operasi Anda.",
                srv_2_title: "Integrasi Sistem", srv_2_desc: "Menghubungkan API, sistem lama, dan berbagai tool untuk infrastruktur yang terpadu dengan mulus.",
                srv_3_title: "Desain Produk (UI/UX)", srv_3_desc: "Antarmuka berbasis data yang memprioritaskan alur pengguna, estetika, dan kemudahan akses.",
                srv_4_title: "Punya masalah kompleks?", srv_4_desc: "Mari rancang solusinya bersama.",
                process_badge: "Metodologi", process_title: "Cara Kerja Kami.",
                proc_1_t: "Eksplorasi", proc_1_d: "Memahami tujuan bisnis dan kebutuhan pengguna Anda.",
                proc_2_t: "Desain", proc_2_d: "Membuat prototipe antarmuka yang presisi dan intuitif.",
                proc_3_t: "Rekayasa", proc_3_d: "Menulis arsitektur kode yang bersih, aman, dan skalabel.",
                proc_4_t: "Peluncuran", proc_4_d: "Rilis ke produksi dan dukungan teknis berkelanjutan.",
                works_badge: "Karya Terpilih", works_title: "Proyek Unggulan.", works_view_all: "Lihat Semua Proyek",
                works_p1_title: "Platform Hub Perusahaan", works_p1_desc: "Portal manajemen komprehensif yang menyederhanakan operasi harian, peran pengguna, dan analitik data ke dalam satu antarmuka intuitif.",
                faq_badge: "FAQ", faq_title: "Pertanyaan Umum",
                q1: "Berapa lama estimasi pengerjaan proyek web?", a1: "Tergantung kompleksitas fitur, platform web khusus biasanya membutuhkan 4 hingga 8 minggu dari awal hingga peluncuran.",
                q2: "Apakah ada layanan dukungan teknis setelah rilis?", a2: "Tentu saja. Kami menyediakan paket pemeliharaan rutin agar platform Anda selalu aman dan mutakhir.",
                q3: "Teknologi apa saja yang paling sering digunakan?", a3: "Kami sangat ahli dalam menggunakan ekosistem modern seperti Laravel, React, Tailwind CSS, serta infrastruktur cloud yang tangguh.",
                q4: "Apakah bisa redesain website yang sudah ada?", a4: "Tentu! Kami mengkhususkan diri dalam mendesain ulang website lama menjadi platform modern dan responsif sambil menjaga peringkat SEO dan migrasi seluruh konten.",
                q5: "Bagaimana komunikasi selama proyek berlangsung?", a5: "Kami menggunakan tools kolaborasi real-time dengan review sprint mingguan. Anda akan memiliki project manager khusus dan akses ke dashboard progres 24/7.",
                stat_1: "Proyek Selesai", stat_2: "Kepuasan Klien", stat_3: "Tahun Pengalaman", stat_4: "Dukungan Teknis",
                srv_5_title: "Sistem E-Commerce", srv_5_desc: "Pengembangan toko online end-to-end dengan integrasi payment gateway, manajemen inventaris, dan alur checkout yang dioptimalkan untuk konversi.",
                srv_6_title: "Performa & SEO", srv_6_desc: "Optimasi Core Web Vitals, audit SEO teknis, dan kecepatan loading yang super cepat. Kami pastikan situs Anda ranking lebih tinggi dan konversi lebih baik.",
                tech_badge: "Tech Stack", tech_title: "Teknologi Andalan.",
                vis_quote: `"Kami tidak sekadar menulis kode; kami merancang ekosistem digital. Fokus kami adalah pada kualitas kode yang murni dan desain intuitif yang memecahkan masalah nyata."`,
                vis_role: "Lead Engineer & Founder",
                ft_title: `Siap membangun sesuatu yang <br class="hidden sm:block"/> <span class="text-white font-bold">berdampak</span> bersama?`, ft_btn: "Mulai proyek", ft_dir: "Direktori", ft_soc: "Sosial"
            }
        };"""
    content = content.replace(old_translations_block.group(0), new_translations)

# Optional: Add font-display to important headings for emphasis
content = re.sub(r'(<h[123][^>]*)(class=")([^"]*)(")', r'\1\2\3 font-display\4', content)

with open('index.html', 'w') as f:
    f.write(content)

