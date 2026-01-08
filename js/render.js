function renderResume() {
    const app = document.getElementById('resume-app');
    if (!app) return;

    app.innerHTML = `
        <div class="max-w-4xl mx-auto my-12 p-8 sm:p-12 bg-white shadow-2xl rounded-3xl border border-slate-100">
            <header class="mb-12 text-center md:text-left">
                <h1 class="text-5xl font-extrabold text-slate-900 mb-2">${resumeData.profile.name}</h1>
                <p class="text-xl font-bold text-blue-600 mb-6">${resumeData.profile.title}</p>
                <div class="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 font-medium">
                    <span>📧 ${resumeData.profile.email}</span>
                    <span>🔗 <a href="https://github.com/${resumeData.profile.github}" target="_blank" class="underline hover:text-blue-600">GitHub</a></span>
                </div>
            </header>

            <section class="mb-16">
                <div class="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
                    ${resumeData.techStack.map(tech => `
                        <div class="flex flex-col items-center p-2 rounded-xl bg-slate-50 border border-transparent hover:border-blue-200 transition">
                            <img src="${tech.img}" class="h-10 w-10 object-contain mb-2" onerror="this.src='https://via.placeholder.com/40?text=${tech.name}'">
                            <span class="text-[10px] font-bold text-slate-500 uppercase">${tech.name}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-16 bg-blue-50 p-6 rounded-2xl border-l-8 border-blue-600 shadow-sm">
                <p class="text-lg leading-relaxed text-slate-700 font-medium italic">"${resumeData.profile.intro}"</p>
            </section>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                    <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-6">KEY PROJECTS</h2>
                    <div class="space-y-8">
                        ${resumeData.projects.map(pj => `
                            <div>
                                <h3 class="text-lg font-bold text-slate-900">${pj.title}</h3>
                                <p class="text-xs text-slate-400 mb-2">${pj.period}</p>
                                <p class="text-sm text-slate-600 mb-3">${pj.description}</p>
                                <ul class="text-xs text-slate-500 space-y-1 mb-3">
                                    ${pj.points.map(pt => `<li>• ${pt}</li>`).join('')}
                                </ul>
                                <a href="${pj.link}" target="_blank" class="text-[10px] font-black text-blue-500 border-b border-blue-500 pb-0.5">DETAILS</a>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section>
                    <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-6">AWARDS</h2>
                    <div class="space-y-4">
                        ${resumeData.awards.map(aw => `
                            <div class="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                <div>
                                    <p class="text-xs font-bold text-slate-800">${aw.title}</p>
                                    <p class="text-[10px] text-slate-400 font-medium">${aw.org}</p>
                                </div>
                                <span class="text-[10px] font-black text-slate-300 ml-2">${aw.date}</span>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderResume);
