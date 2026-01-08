function renderResume() {
    const app = document.getElementById('resume-app');
    if (!app || typeof resumeData === 'undefined') return;

    app.innerHTML = `
        <div class="max-w-4xl mx-auto my-12 p-8 sm:p-12 bg-white shadow-2xl rounded-3xl border border-slate-100">
            <header class="mb-10 text-center md:text-left">
                <div class="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md mb-4 shadow-sm">
                    #${resumeData.profile.keyword}
                </div>
                <h1 class="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">${resumeData.profile.name}</h1>
                <p class="text-xl font-bold text-slate-500 mb-6 uppercase tracking-widest text-sm">${resumeData.profile.title}</p>
                <div class="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 font-medium text-sm">
                    <span>📧 ${resumeData.profile.email}</span>
                    <span>🔗 <a href="https://github.com/${resumeData.profile.github}" target="_blank" class="underline hover:text-blue-600">GitHub</a></span>
                </div>
            </header>

            <section class="mb-16">
                <div class="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl relative overflow-hidden">
                    <p class="text-lg leading-relaxed text-slate-100 relative z-10 font-medium">
                        "${resumeData.profile.summary}"
                    </p>
                    <div class="absolute right-[-20px] bottom-[-20px] opacity-10">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="white"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z"/></svg>
                    </div>
                </div>
            </section>

            <section class="mb-16">
                <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 flex items-center">
                    KEY PROJECTS <span class="ml-2 h-px bg-slate-200 flex-grow"></span>
                </h2>
                <div class="space-y-12">
                    ${resumeData.projects.map(pj => `
                        <div class="group border-l-4 border-transparent hover:border-blue-500 pl-6 transition-all">
                            <h3 class="text-2xl font-bold text-slate-900 mb-1">${pj.title}</h3>
                            <p class="text-sm text-slate-400 mb-4 font-mono">${pj.period}</p>
                            <p class="text-md text-slate-700 mb-4 font-bold leading-snug">${pj.description}</p>
                            <ul class="text-sm text-slate-500 space-y-2 mb-6">
                                ${pj.points.map(pt => `<li class="flex items-start"><span class="mr-2 text-blue-500">✔</span>${pt}</li>`).join('')}
                            </ul>
                            ${pj.link !== '#' ? `<a href="${pj.link}" target="_blank" class="inline-block text-xs font-black text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition">GitHub Repository</a>` : '<span class="text-xs font-bold text-slate-300 italic">Coming Soon</span>'}
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-16">
                <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 flex items-center">
                    ACTIVITIES & AWARDS <span class="ml-2 h-px bg-slate-200 flex-grow"></span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${resumeData.awards.map(aw => `
                        <div class="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                            <div class="max-w-[75%]">
                                <p class="text-sm font-bold text-slate-800 leading-tight">${aw.title}</p>
                                <p class="text-[10px] text-slate-400 mt-1">${aw.org}</p>
                            </div>
                            <span class="text-[10px] font-mono text-slate-300 ml-4">${aw.date}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-20 p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-inner">
                <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-6">PHILOSOPHY & EXPERIENCE</h2>
                <p class="text-md leading-loose text-slate-700 whitespace-pre-line font-medium">
                    ${resumeData.profile.fullIntro}
                </p>
            </section>

            <section>
                <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 flex items-center">
                    OFFICIAL TECH STACK <span class="ml-2 h-px bg-slate-200 flex-grow"></span>
                </h2>
                <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
                    ${resumeData.techStack.map(tech => `
                        <div class="flex flex-col items-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:scale-105 transition-transform duration-300">
                            <img src="${tech.img}" class="h-10 w-10 object-contain mb-3" onerror="this.src='https://via.placeholder.com/40?text=${tech.name}'">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">${tech.name}</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', renderResume);
