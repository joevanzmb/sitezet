const fs = require('fs');
let content = fs.readFileSync('views/index.ejs', 'utf-8');
const startToken = '<!-- Colorful glowing orbs behind the glass (moved outside the section) -->';
const endToken = '<!-- Selected Works Teaser -->';

// Find indices
const startIndex = content.indexOf(startToken);
const endIndex = content.indexOf(endToken);

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, content.lastIndexOf('<div class="w-full relative overflow-hidden bg-slate-50', startIndex));
  const after = content.substring(endIndex);

  const newContent = `<div class="w-full relative overflow-hidden bg-slate-950 py-12 lg:py-32 px-4 lg:px-8">
        
        <!-- Colorful glowing orbs behind the glass (moved outside the section) -->
        <div class="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none z-0 animate-float-slow"></div>
        <div class="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none z-0 animate-float-slow" style="animation-delay: 2s;"></div>

        <!-- The Glass Card -->
        <section id="process"
            class="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.5)] py-20 lg:py-28 px-6 lg:px-16 group/glass border border-white/10 border-b-white/5 border-r-white/5 bg-white/5 backdrop-blur-2xl [transform:translateZ(0)] z-10">
            
            <div class="relative z-10">
                <div class="text-center md:text-left mb-20 max-w-5xl" data-aos="fade-up">
                    <h2 class="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-teal-400/30 text-teal-400 font-bold tracking-widest uppercase text-xs mb-6 shadow-sm">
                        WORKFLOW SISTEM</h2>
                    <h3 class="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[1.05]">
                        Alur Sistem Kerja<br>Sangat Transparan.</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 group/board">
                    <!-- Step 1 -->
                    <div class="relative text-center group/step transition-all duration-500 group-hover/board:opacity-50 hover:!opacity-100 hover:scale-105"
                        data-aos="fade-up" data-aos-delay="100">
                        <div
                            class="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl shadow-black/20 transition-all duration-500 relative z-10 hover:bg-teal-500/20 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                            <i data-lucide="message-square" class="w-10 h-10 text-teal-400 animate-float-medium"></i>
                        </div>
                        <div
                            class="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-400 to-teal-500/0 animate-flow-line opacity-40">
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2 group-hover/step:text-teal-400 transition-colors">
                            Kebutuhan & Konsultasi</h4>
                        <p class="text-slate-400 font-light text-sm px-4 group-hover/step:text-slate-300 transition-colors">
                            Menginformasikan kebutuhan sistem (requirements), dilanjutkan dengan sesi konsultasi mendalam dan review awal.</p>
                    </div>
                    <!-- Step 2 -->
                    <div class="relative text-center group/step transition-all duration-500 group-hover/board:opacity-50 hover:!opacity-100 hover:scale-105"
                        data-aos="fade-up" data-aos-delay="200">
                        <div
                            class="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl shadow-black/20 transition-all duration-500 relative z-10 hover:bg-teal-500/20 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                            <i data-lucide="file-text"
                                class="w-10 h-10 text-teal-400 animate-float-slow"></i>
                        </div>
                        <div
                            class="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-400 to-teal-500/0 animate-flow-line opacity-40">
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2 group-hover/step:text-teal-400 transition-colors">
                            Dokumen & DP 50%</h4>
                        <p class="text-slate-400 font-light text-sm px-4 group-hover/step:text-slate-300 transition-colors">
                            Kami mengirimkan dokumen fitur, biaya, dan timeline. Jika deal, pengerjaan dimulai setelah pembayaran DP 50%.</p>
                    </div>
                    <!-- Step 3 -->
                    <div class="relative text-center group/step transition-all duration-500 group-hover/board:opacity-50 hover:!opacity-100 hover:scale-105"
                        data-aos="fade-up" data-aos-delay="300">
                        <div
                            class="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl shadow-black/20 transition-all duration-500 relative z-10 hover:bg-teal-500/20 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                            <i data-lucide="rocket"
                                class="w-10 h-10 text-teal-400 animate-float-fast"></i>
                        </div>
                        <div
                            class="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-400 to-teal-500/0 animate-flow-line opacity-40">
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2 group-hover/step:text-teal-400 transition-colors">
                            Pelunasan & Deploy</h4>
                        <p class="text-slate-400 font-light text-sm px-4 group-hover/step:text-slate-300 transition-colors">
                            Setelah 100% selesai (done), dilakukan pelunasan, pemilihan nama domain, dan siap deploy ke publik.</p>
                    </div>
                    <!-- Step 4 -->
                    <div class="relative text-center group/step transition-all duration-500 group-hover/board:opacity-50 hover:!opacity-100 hover:scale-105"
                        data-aos="fade-up" data-aos-delay="400">
                        <div
                            class="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500 to-emerald-600 border border-teal-400/50 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl shadow-teal-500/40 transition-all duration-500 relative z-10 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-110">
                            <i data-lucide="shield-check" class="w-10 h-10 text-white animate-bounce"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2 group-hover/step:text-teal-400 transition-colors">
                            Revisi & Maintenance</h4>
                        <p class="text-slate-400 font-light text-sm px-4 group-hover/step:text-slate-300 transition-colors">
                            Bebas revisi minor wajar (bukan fitur/sistem). Revisi besar ada biaya tambahan. Maintenance sesuai paket hosting.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    `;

  fs.writeFileSync('views/index.ejs', before + newContent + after);
}
