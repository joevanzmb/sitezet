import sys

# Read index.html
with open('index.html', 'r') as f:
    index_html = f.read()

# Find Estimator Section
start_marker = "<!-- Project Estimator Section -->"
end_marker = "    <!-- FAQ Section (Moved) -->"

start_idx = index_html.find(start_marker)
end_idx = index_html.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers in index.html")
    sys.exit(1)

estimator_code = index_html[start_idx:end_idx]

# Remove the estimator from index.html and replace with simple pricing
simple_pricing = """<!-- Paket Harga (Simple Pricing) -->
    <section class="py-32 bg-slate-50 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div class="text-center mb-20" data-aos="fade-up">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-bold text-sm mb-6">
                    <i data-lucide="tag" class="w-4 h-4"></i>
                    Estimasi Biaya
                </div>
                <h3 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Paket Harga Transparan</h3>
                <p class="text-slate-500 text-lg max-w-2xl mx-auto">Kami menyediakan berbagai pilihan paket pembuatan website yang disesuaikan dengan kebutuhan bisnis Anda.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Paket 1 -->
                <div class="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative" data-aos="fade-up">
                    <h4 class="text-2xl font-bold text-slate-900 mb-2">Landing Page</h4>
                    <p class="text-slate-500 text-sm mb-6">Cocok untuk promosi produk tunggal.</p>
                    <div class="mb-8">
                        <span class="text-slate-500 text-sm font-medium">Mulai dari</span><br>
                        <span class="text-4xl font-black text-slate-900">Rp 350rb</span>
                    </div>
                    <ul class="space-y-4 mb-10 text-sm text-slate-600">
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Desain 1 Halaman</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Mobile Responsive</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Tombol WhatsApp</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Pengerjaan 7-14 Hari</li>
                    </ul>
                    <a href="services.html#estimator" class="block w-full py-4 text-center rounded-xl bg-teal-50 text-teal-600 font-bold hover:bg-teal-500 hover:text-white transition-colors">Kalkulasi Detail</a>
                </div>
                
                <!-- Paket 2 -->
                <div class="bg-slate-900 text-white p-10 rounded-3xl border border-slate-800 shadow-2xl shadow-teal-900/20 hover:-translate-y-2 transition-transform duration-300 relative transform lg:scale-105 z-10" data-aos="fade-up" data-aos-delay="100">
                    <div class="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg rounded-tr-3xl">POPULER</div>
                    <h4 class="text-2xl font-bold text-white mb-2">Company Profile</h4>
                    <p class="text-slate-400 text-sm mb-6">Untuk profil perusahaan & kredibilitas.</p>
                    <div class="mb-8">
                        <span class="text-slate-400 text-sm font-medium">Mulai dari</span><br>
                        <span class="text-4xl font-black text-teal-400">Rp 750rb</span>
                    </div>
                    <ul class="space-y-4 mb-10 text-sm text-slate-300">
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-400"></i> Maksimal 5 Halaman</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-400"></i> Galeri & Portofolio</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-400"></i> Form Kontak Email</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-400"></i> Pengerjaan 2-3 Minggu</li>
                    </ul>
                    <a href="services.html#estimator" class="block w-full py-4 text-center rounded-xl bg-teal-500 text-white font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/30">Kalkulasi Detail</a>
                </div>

                <!-- Paket 3 -->
                <div class="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative" data-aos="fade-up" data-aos-delay="200">
                    <h4 class="text-2xl font-bold text-slate-900 mb-2">Toko Online</h4>
                    <p class="text-slate-500 text-sm mb-6">Jualan online terpusat & otomatis.</p>
                    <div class="mb-8">
                        <span class="text-slate-500 text-sm font-medium">Mulai dari</span><br>
                        <span class="text-4xl font-black text-slate-900">Rp 1,5 Jt</span>
                    </div>
                    <ul class="space-y-4 mb-10 text-sm text-slate-600">
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Keranjang Belanja</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Cek Ongkir Otomatis</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Checkout via WhatsApp</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="w-5 h-5 text-teal-500"></i> Pengerjaan 3-4 Minggu</li>
                    </ul>
                    <a href="services.html#estimator" class="block w-full py-4 text-center rounded-xl bg-teal-50 text-teal-600 font-bold hover:bg-teal-500 hover:text-white transition-colors">Kalkulasi Detail</a>
                </div>
            </div>
            
            <div class="text-center mt-12" data-aos="fade-up">
                <p class="text-slate-500 mb-4">Butuh kustomisasi fitur yang lebih spesifik atau Web App khusus (SaaS/Portal)?</p>
                <a href="services.html#estimator" class="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors group">
                    Gunakan Kalkulator Interaktif Lengkap Kami <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>
        </div>
    </section>
"""

new_index_html = index_html[:start_idx] + simple_pricing + index_html[end_idx:]

with open('index.html', 'w') as f:
    f.write(new_index_html)


# Read services.html
with open('services.html', 'r') as f:
    services_html = f.read()

# Insert before FAQ Accordion Section
faq_marker = "<!-- FAQ Accordion Section -->"
faq_idx = services_html.find(faq_marker)

if faq_idx == -1:
    print("Could not find faq marker in services.html")
    sys.exit(1)

new_services_html = services_html[:faq_idx] + estimator_code + "\n    " + services_html[faq_idx:]

with open('services.html', 'w') as f:
    f.write(new_services_html)

print("Migration successful")
