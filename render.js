function renderResume() {
    const app = document.getElementById('resume-app');
    if (!app || typeof resumeData === 'undefined') return;

    app.innerHTML = `
        <div class="max-w-4xl mx-auto my-12 p-8 sm:p-12 bg-white shadow-2xl rounded-3xl border border-slate-100">
            <header class="mb-10 text-center md:text-left">
                <div class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                    #${resumeData.profile.keyword}
                </div>
                <h1 class="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">${resumeData.profile.name}</h1>
                <p class="text-xl font-bold text-slate-500 mb-6">${resumeData.profile.title}</p>
                <div class="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 font-medium text-sm">
                    <span>📧 ${resumeData.profile.email}</span>
                    <span>🔗 <a href="https://github.com/${resumeData.profile.github}" target="_blank" class="underline hover:text-blue-600">GitHub</a></span>
                </div>
            </header>

            <section class="mb-16 bg-slate-900 p-8 rounded-2xl shadow-lg">
                <p class="text-lg leading-relaxed text-white font-medium">
                    <span class="text-blue-400 font-bold">"</span>
                    ${resumeData.profile.summary}
                    <span class="text-blue-400 font-bold">"</span>
                </p>
            </section>

            <section class="mb-16">
                <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 flex items-center">
                    KEY PROJECTS <span class="ml-2 h-px bg-slate-200 flex-grow"></span>
                </h2>
                <div class="space-y-12">
                    ${resumeData.projects.map(pj => `
                        <div class="group">
                            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition">${pj.title}</h3>
                            <p class="text-sm text-slate-400 mb-4 font-mono">${pj.period}</p>
                            <p class="text-md text-slate-700 mb-4 leading-relaxed font-semibold">${pj.description}</p>
                            <ul class="text-sm text-slate-500 space-y-2 mb-6">
                                ${pj.points.map(pt => `<li class="flex items-start"><span class="mr-2 text-blue-500">▹</span>${pt}</li>`).join('')}
                            </ul>
                            <a href="${pj.link}" target="_blank" class="inline-block text-xs font-black text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition">VIEW PROJECT DETAILS</a>
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
                        <div class="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition">
                            <div>
                                <p class="text-sm font-bold text-slate-800">${aw.title}</p>
                                <p class="text-xs text-slate-400">${aw.org}</p>
                            </div>
                            <span class="text-xs font-mono text-slate-300 ml-4">${aw.date}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-16 p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-6">ABOUT ME</h2>
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
                        <div class="flex flex-col items-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-300 transition">
                            <img src="${tech.img}" class="h-10 w-10 object-contain mb-3" onerror="this.src='https://via.placeholder.com/40?text=${tech.name}'">
                            <span class="text-[10px] font-black text-slate-500 uppercase tracking-tighter">${tech.name}</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', renderResume);
