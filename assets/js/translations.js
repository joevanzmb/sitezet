// === Sitezet - Global Translations ===
const translations = {
    en: {
        // Nav
        nav_about: "About", nav_services: "Services", nav_project: "Project", nav_contact: "Contact",
        nav_home: "Home", nav_expertise: "Expertise", nav_process: "Process", nav_works: "Works", nav_vision: "Vision", nav_cta: "Let's Talk",

        // Index - Hero
        hero_badge: `<i data-lucide="award" class="w-4 h-4 animate-pulse-glow"></i> Premium Web Agency`,
        hero_title_1: "Design <br/>", hero_title_2: "Beyond Limits.",
        hero_desc: "Bespoke digital experiences built with precision. We engineer iconic platforms that transcend standard templates.",
        hero_btn_explore: "Explore Works", hero_btn_process: "Our Expertise", hero_system_active: "System Active",

        // Index - Trusted
        trusted_by: "Trusted by innovative companies worldwide",

        // Index - Services
        srv_badge: "Our Expertise", srv_title: "Everything You Need to Scale.",
        srv_desc: "We deliver end-to-end digital solutions that combine striking aesthetics with robust engineering.",
        srv_1_title: "Custom Web Applications", srv_1_desc: "High-performance SPA and complex platforms built on modern stacks (React, Vue, Laravel), tailored exactly to your operational needs.",
        srv_2_title: "Systems Integration", srv_2_desc: "Seamlessly connecting APIs, legacy systems, and tools for unified infrastructure.",
        srv_3_title: "UI/UX Architecture", srv_3_desc: "Data-driven interfaces prioritizing user flow, aesthetics, and accessibility.",
        srv_4_title: "Need a custom solution?", srv_4_desc: "Let's map out your architecture together.",
        srv_5_title: "E-Commerce Solutions", srv_5_desc: "End-to-end online store development with payment gateway integration, inventory management, and conversion-optimized checkout flows.",
        srv_6_title: "SEO & Performance Optimization", srv_6_desc: "Core Web Vitals optimization, technical SEO audits, and blazing-fast loading times. We ensure your site ranks higher and converts better.",
        srv_7_title: "Systems Management", srv_7_desc: "Comprehensive system management solutions including monitoring, maintenance, and optimization to keep your digital infrastructure running at peak performance.",

        // Index - Process
        process_badge: "Workflow", process_title: "How We Craft Your Website.",
        proc_1_t: "Consultation", proc_1_d: "We discuss your goals and help you pick the right package.",
        proc_2_t: "Content Gathering", proc_2_d: "You provide logos, texts, and images. We organize them.",
        proc_3_t: "Design & Build", proc_3_d: "We craft your website with premium design and clean code.",
        proc_4_t: "Review & Launch", proc_4_d: "Final review, revisions if needed, and we go live!",

        // Index - Works
        works_badge: "Selected Works", works_title: "Featured Project.", works_view_all: "View All Gallery",
        works_p1_title: "Enterprise Hub Platform", works_p1_desc: "A comprehensive management portal streamlining daily operations, user roles, and data analytics into one intuitive interface. Built for scale.",

        // Index - FAQ
        faq_badge: "FAQ", faq_title: "Common Questions",
        q1: "What is the typical timeline for a custom project?", a1: "Depending on complexity, typical web platforms take between 4 to 8 weeks from discovery to launch.",
        q2: "Do you offer post-launch support and maintenance?", a2: "Absolutely. We provide continuous maintenance packages to ensure your platform remains secure and up-to-date.",
        q3: "What technology stack do you specialize in?", a3: "We are experts in modern stacks including Laravel, Livewire, React, Tailwind CSS, and scalable cloud infrastructures.",
        q4: "Can you redesign our existing website?", a4: "Yes! We specialize in redesigning legacy websites into modern, responsive platforms while preserving your SEO rankings and migrating all existing content seamlessly.",
        q5: "How do you handle project communication?", a5: "We use real-time collaboration tools with weekly sprint reviews. You'll have a dedicated project manager and access to our progress dashboard 24/7.",

        // Index - Stats
        stat_1: "Projects Delivered", stat_2: "Client Satisfaction", stat_3: "Years Experience", stat_4: "Technical Support",

        // Index - Tech
        tech_badge: "Tech Stack", tech_title: "Tools We Master.",

        // Founder Vision
        vis_quote: '"We don\'t just write code; we architect digital ecosystems. Our dedication is to pristine code quality and iconic design that elevates brands above the noise."',
        vis_role: "Lead Engineer & Visionary",

        // Footer
        ft_title: 'Ready to build something <br class="hidden sm:block"/> <span class="text-white font-bold">iconic</span> together?',
        ft_btn: "Start a project", ft_dir: "Directory", ft_soc: "Social",

        // About page
        abt_badge: "ABOUT US",
        abt_title_1: "We Design", abt_title_2: '<span class="text-teal-400">Premium Digital</span> Ecosystems.',
        abt_desc: "Sitezet is a digital product studio focused on high-quality technology engineering and premium visual architecture. We redefine how brands interact in the digital world.",
        abt_val_1_title: "Clean & Pure Code",
        abt_val_1_desc: "We write code with world-class structure. Blazing fast load speeds, maximum performance, and easily maintainable architecture are our guarantees.",
        abt_val_2_title: "Premium Editorial Design",
        abt_val_2_desc: "Our designs are never rigid or generic. Every project features stunning visuals, majestic editorial typography, and lively micro-animation transitions.",
        abt_val_3_title: "Maximum Scalability",
        abt_val_3_desc: "The applications we build are ready to handle thousands of concurrent transactions without issues. Integrating cutting-edge cloud technology for robust performance.",

        // Services page
        srv_hero_title_1: "Digital Solutions", srv_hero_title_2: 'Without <span class="text-teal-600">Scalability</span> Limits.',
        srv_hero_desc: "From high-end editorial UI/UX prototypes to robust backend engineering ready to handle millions of requests. We bring your vision to reality.",
        srv_card_1_title: "Custom Web Apps",
        srv_card_1_desc: "Building highly optimized custom web applications using Laravel, Tailwind, React, and Vue. Prioritizing fast loading performance and guaranteed security.",
        srv_card_2_title: "UI/UX Design & Interactive Prototypes",
        srv_card_2_desc: "Creating seamless user journeys and premium interfaces that captivate at first sight. Delivering exclusive visual identity with a strong distinctive character.",
        srv_card_3_title: "System Integration & Cloud DevOps",
        srv_card_3_desc: "Integrating various backend systems, payment gateways, ERPs, and designing robust server infrastructure (AWS, Google Cloud, Premium cPanel) for scalability.",
        srv_card_4_title: "Top-Tier Performance & SEO Optimization",
        srv_card_4_desc: "Ensuring your website loads in milliseconds and ranks at the top of Google Search. Maximizing Core Web Vitals to 100% green.",
        srv_faq_badge: "Have Questions?", srv_faq_title: "Frequently Asked Questions",
        srv_q1: "How long does it take to build a website?", srv_a1: "Estimated time ranges from 2 to 6 weeks, depending on module complexity, interactivity features, and desired API integrations.",
        srv_q2: "Is the website mobile-friendly?", srv_a2: "Yes, 100%! All our digital products are designed using a Mobile-First philosophy, ensuring exceptionally smooth functionality on all smartphones, tablets, and desktops.",
        srv_q3: "What technologies do you use most?", srv_a3: "We master Laravel (for powerful backend), Tailwind CSS (for pixel-perfect styling), React/Vue (for interactive web apps), and AWS/Google Cloud servers.",

        // Works page
        wrk_badge: "SELECTED WORKS",
        wrk_hero_t1: "Product Gallery", wrk_hero_t2: '<span class="text-teal-600">Prestigious Digital</span>.',
        wrk_desc: "Here are some iconic platforms we designed and built with world-class engineering standards. Prioritizing high performance, ease of integration, and premium visuals.",
        wrk_tag_1: "SaaS Dashboard", wrk_title_1: "ShopSync Platform", wrk_desc_1: "Automated inventory management system and multi-store (marketplace) integration in one intuitive premium dashboard.",
        wrk_tag_2: "Fintech Ecosystem", wrk_title_2: "Duitku Gateway Integration", wrk_desc_2: "Implementation of custom high-speed payment gateway architecture that guarantees 100% secure transactions.",
        wrk_tag_3: "Corporate System", wrk_title_3: "CSR System Portal", wrk_desc_3: "Large-scale global CSR program monitoring and management portal with high-accuracy real-time reporting dashboard.",
        wrk_tag_4: "Web Engine", wrk_title_4: "Filament Custom Ecosystem", wrk_desc_4: "Custom internal management system designed to be fully interactive using the leading Filament PHP ecosystem.",

        // Contact page
        cnt_badge: "CONTACT US",
        cnt_title_1: "Let's Discuss", cnt_title_2: '<span class="text-teal-600">Your Great Idea</span>.',
        cnt_desc: "Send a message directly to our engineering team. We're ready to listen to your business challenges and provide the most precise digital architecture.",
        cnt_form_title: "Start a Proposal", cnt_form_desc: "Fill out the short form below and we'll respond within a maximum of 24 business hours.",
        cnt_label_name: "Full Name", cnt_label_email: "Company Email", cnt_label_topic: "Topic of Interest", cnt_label_message: "Detailed Message",
        cnt_btn_submit: "Submit Form",
        cnt_channels_title: "Direct Channels",
        cnt_channel_email: "Official Email", cnt_channel_wa: "WhatsApp Team", cnt_channel_loc: "Studio Location",
        cnt_consult_title: "Face-to-Face Consultation?", cnt_consult_desc: "We are happy to arrange an in-person consultation meeting if your business is located in the Surabaya & Surrounding area.",
        cnt_consult_btn: "Schedule Meeting"
    },

    id: {
        // Nav
        nav_about: "Tentang", nav_services: "Layanan", nav_project: "Proyek", nav_contact: "Kontak",
        nav_home: "Beranda", nav_expertise: "Keahlian", nav_process: "Proses", nav_works: "Karya", nav_vision: "Visi", nav_cta: "Mari Diskusi",

        // Index - Hero
        hero_badge: `<i data-lucide="award" class="w-4 h-4 animate-pulse-glow"></i> Agensi Web Premium`,
        hero_title_1: "Bikin Bisnis Anda <br/>", hero_title_2: "Tampil Mahal.",
        hero_desc: "Tinggalkan desain template pasaran yang membosankan. Kami merancang ekosistem digital kelas atas yang tak hanya memukau, tapi siap menyulap pengunjung menjadi pelanggan setia Anda.",
        hero_btn_explore: "Lihat Buktinya", hero_btn_process: "Cara Kerja Kami", hero_system_active: "Sistem Aktif",

        // Index - Trusted
        trusted_by: "Dipercaya oleh perusahaan inovatif di seluruh dunia",

        // Index - Services
        srv_badge: "Solusi Eksklusif", srv_title: "Senjata Rahasia Scale-Up.",
        srv_desc: "Kami memberikan solusi digital menyeluruh yang menggabungkan estetika memukau dengan rekayasa yang kuat.",
        srv_1_title: "Aplikasi Web Custom", srv_1_desc: "Platform kompleks berkinerja tinggi yang dibangun di atas stack modern (React, Vue, Laravel), disesuaikan dengan kebutuhan operasi Anda.",
        srv_2_title: "Integrasi Sistem", srv_2_desc: "Menghubungkan API, sistem lama, dan berbagai tool untuk infrastruktur yang terpadu dengan mulus.",
        srv_3_title: "Arsitektur UI/UX", srv_3_desc: "Antarmuka berbasis data yang memprioritaskan alur pengguna, estetika, dan kemudahan akses.",
        srv_4_title: "Ingin mendominasi pasar?", srv_4_desc: "Mari kita rancang ekosistem digital impian Anda sekarang.",
        srv_5_title: "Mesin E-Commerce", srv_5_desc: "Toko online otomatis dengan integrasi pembayaran cerdas yang dirancang khusus untuk meledakkan rasio konversi Anda.",
        srv_6_title: "Optimasi SEO Ekstrem", srv_6_desc: "Website lemot bikin pelanggan kabur! Kami pastikan website Anda melesat kilat dan menguasai halaman pertama Google.",
        srv_7_title: "Manajemen Sistem", srv_7_desc: "Anda fokus jualan, kami yang urus teknisnya. Solusi perawatan komprehensif agar server Anda tidak pernah down.",

        // Index - Process
        process_badge: "Bongkar Rahasia", process_title: "Langkah Menuju Dominasi Digital.",
        proc_1_t: "Konsultasi Profit", proc_1_d: "Kita bedah masalah bisnis Anda dan temukan formula digital paling menguntungkan.",
        proc_2_t: "Pengumpulan Amunisi", proc_2_d: "Siapkan logo dan materi, serahkan pada tim kami untuk diracik menjadi aset mematikan.",
        proc_3_t: "Eksekusi & Coding", proc_3_d: "Sihir dimulai. Kami bangun website Anda dengan desain mahal dan performa ekstrem.",
        proc_4_t: "Review & Meroket", proc_4_d: "Begitu sempurna, website Anda siap diluncurkan untuk memikat ribuan leads baru!",

        // Index - Works
        works_badge: "Masterpiece", works_title: "Bukti Nyata Karya Kami.", works_view_all: "Buka Semua Galeri",
        works_p1_title: "Enterprise Hub Platform", works_p1_desc: "Portal manajemen super cerdas, menyatukan operasi harian Anda ke dalam satu layar elegan yang sangat mudah dikendalikan.",

        // Index - FAQ
        faq_badge: "Tanya Jawab", faq_title: "Semua Keraguan Anda, Terjawab.",
        q1: "Berapa lama website saya bisa selesai?", a1: "Sangat efisien. Biasanya butuh 4-8 minggu untuk menciptakan 'mesin uang' Anda dari nol hingga siap memikat audiens.",
        q2: "Apakah ada garansi jika website error?", a2: "Pasti! Anda mendapat dukungan prioritas dari kami. Website Anda akan dijaga agar performanya selalu buas dan aman.",
        q3: "Website buatan Anda pakai apa?", a3: "Kami benci template! Kami meracik website dengan teknologi papan atas (Laravel, React, Tailwind) layaknya startup global.",
        q4: "Bisa perbaiki website lama saya yang kaku?", a4: "Sangat bisa! Kami akan rombak total website lama Anda menjadi eksklusif, super cepat, dan pastinya peringkat Google Anda makin meroket.",
        q5: "Gimana cara kita komunikasi nantinya?", a5: "Santai, kita buat grup WhatsApp khusus. Anda akan didampingi Project Manager setia yang siap update progres 24/7 tanpa ribet.",

        // Index - Stats
        stat_1: "Proyek Selesai", stat_2: "Kepuasan Klien", stat_3: "Tahun Pengalaman", stat_4: "Dukungan Teknis",

        // Index - Tech
        tech_badge: "Tech Stack", tech_title: "Teknologi Papan Atas.",

        // Founder Vision
        vis_quote: '"Kami tidak sekadar menulis barisan kode. Kami merakit ekosistem digital mewah yang mengangkat derajat brand Anda jauh meninggalkan kompetitor."',
        vis_role: "Lead Engineer & Visioner",

        // Footer
        ft_title: 'Siap mengubah brand Anda menjadi <br class="hidden sm:block"/> <span class="text-white font-bold">raksasa digital?</span>',
        ft_btn: "Ambil Penawaran Khusus", ft_dir: "Direktori", ft_soc: "Sosial",

        // About page
        abt_badge: "TENTANG KAMI",
        abt_title_1: "Kami Merancang", abt_title_2: '<span class="text-teal-400">Ekosistem Digital</span> Berkelas.',
        abt_desc: "Sitezet adalah digital product studio yang berfokus pada rekayasa teknologi berkualitas tinggi dan arsitektur visual premium. Kami mendefinisikan ulang cara brand berinteraksi di dunia digital.",
        abt_val_1_title: "Kode Bersih & Murni",
        abt_val_1_desc: "Kami menulis kode dengan struktur kelas dunia. Kecepatan loading super cepat, performa maksimal, dan arsitektur yang mudah dirawat di masa depan adalah jaminan kami.",
        abt_val_2_title: "Desain Editorial Premium",
        abt_val_2_desc: "Desain kami tidak kaku dan generik. Setiap proyek dirancang dengan visual yang menakjubkan, tipografi editorial yang megah, serta transisi animasi mikro yang hidup.",
        abt_val_3_title: "Skalabilitas Maksimal",
        abt_val_3_desc: "Aplikasi yang kami bangun siap menangani ribuan transaksi secara bersamaan tanpa kendala. Mengintegrasikan teknologi cloud termutakhir untuk performa kokoh.",

        // Services page
        srv_hero_title_1: "Solusi Digital", srv_hero_title_2: 'Tanpa Batas <span class="text-teal-600">Skalabilitas</span>.',
        srv_hero_desc: "Dari purwarupa UI/UX editorial berkelas tinggi hingga rekayasa backend tangguh yang siap menangani jutaan request. Kami membawa visi Anda menjadi kenyataan.",
        srv_card_1_title: "Pengembangan Web Khusus",
        srv_card_1_desc: "Membangun aplikasi web kustom yang sangat teroptimasi menggunakan teknologi Laravel, Tailwind, React, dan Vue. Mengutamakan performa loading cepat dan keamanan terjamin.",
        srv_card_2_title: "Desain UI/UX & Prototipe Interaktif",
        srv_card_2_desc: "Menciptakan perjalanan pengguna yang mulus dan antarmuka premium yang memikat mata pertama kali. Menghadirkan identitas visual yang eksklusif dan berciri khas kuat.",
        srv_card_3_title: "Integrasi Sistem & Cloud DevOps",
        srv_card_3_desc: "Mengintegrasikan berbagai backend system, pembayaran gateway, ERP, dan mendesain infrastruktur server tangguh (AWS, Google Cloud, cPanel Premium) untuk skalabilitas.",
        srv_card_4_title: "Optimasi Performa & SEO Kelas Atas",
        srv_card_4_desc: "Memastikan situs web Anda dimuat dalam hitungan milidetik dan menduduki peringkat teratas Google Search. Memaksimalkan Core Web Vitals 100% hijau.",
        srv_faq_badge: "Ada Pertanyaan?", srv_faq_title: "Tanya Jawab (FAQ)",
        srv_q1: "Berapa lama estimasi pembuatan satu website?", srv_a1: "Estimasi waktu berkisar antara 2 hingga 6 minggu, sangat bergantung pada kompleksitas modul, fitur interaktivitas, dan integrasi API yang diinginkan.",
        srv_q2: "Apakah website yang dibangun ramah untuk perangkat seluler?", srv_a2: "Ya, 100%! Seluruh produk digital kami didesain menggunakan filosofi Mobile-First, menjamin fungsionalitas yang luar biasa mulus di semua ponsel pintar, tablet, dan komputer desktop.",
        srv_q3: "Teknologi apa yang paling sering digunakan?", srv_a3: "Kami menguasai framework Laravel (untuk backend canggih), Tailwind CSS (untuk styling pixel-perfect), React/Vue (untuk web apps interaktif), dan server cloud AWS / Google Cloud.",

        // Works page
        wrk_badge: "KARYA TERPILIH",
        wrk_hero_t1: "Galeri Produk", wrk_hero_t2: '<span class="text-teal-600">Digital Prestisius</span>.',
        wrk_desc: "Berikut adalah beberapa platform ikonik yang kami rancang dan bangun dengan standar rekayasa kelas dunia. Mengutamakan performa tinggi, kemudahan integrasi, dan visual berkelas.",
        wrk_tag_1: "SaaS Dashboard", wrk_title_1: "ShopSync Platform", wrk_desc_1: "Sistem manajemen stok otomatis dan integrasi multi-toko (marketplace) dalam satu dasbor premium yang intuitif.",
        wrk_tag_2: "Fintech Ecosystem", wrk_title_2: "Duitku Gateway Integration", wrk_desc_2: "Implementasi arsitektur gerbang pembayaran kustom berkecepatan tinggi yang menjamin keamanan transaksi 100% aman.",
        wrk_tag_3: "Corporate System", wrk_title_3: "CSR System Portal", wrk_desc_3: "Portal monitoring dan manajemen program CSR global berskala besar dengan dasbor pelaporan real-time berakurasi tinggi.",
        wrk_tag_4: "Web Engine", wrk_title_4: "Filament Custom Ecosystem", wrk_desc_4: "Sistem manajemen internal kustom yang didesain interaktif penuh menggunakan ekosistem Filament PHP terkemuka.",

        // Contact page
        cnt_badge: "KONTAK KAMI",
        cnt_title_1: "Mari Diskusi", cnt_title_2: '<span class="text-teal-600">Ide Hebat Anda</span>.',
        cnt_desc: "Kirim pesan langsung kepada tim engineering kami. Kami siap mendengarkan tantangan bisnis Anda dan memberikan arsitektur digital paling tepat.",
        cnt_form_title: "Mulai Proposal", cnt_form_desc: "Isi formulir singkat di bawah ini dan kami akan membalas dalam waktu maksimal 24 jam kerja.",
        cnt_label_name: "Nama Lengkap", cnt_label_email: "Email Perusahaan", cnt_label_topic: "Topik Kebutuhan", cnt_label_message: "Pesan Detail",
        cnt_btn_submit: "Kirim Formulir",
        cnt_channels_title: "Saluran Langsung",
        cnt_channel_email: "Email Resmi", cnt_channel_wa: "WhatsApp Tim", cnt_channel_loc: "Lokasi Studio",
        cnt_consult_title: "Konsultasi Tatap Muka?", cnt_consult_desc: "Kami dengan senang hati menyelenggarakan pertemuan konsultasi tatap muka langsung jika bisnis Anda berlokasi di area Surabaya & Sekitarnya.",
        cnt_consult_btn: "Atur Pertemuan"
    }
};
