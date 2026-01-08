// 섹션 1: 헤더 (이름, 학교, 연락처)
const createHeader = (profile) => `
    <header class="mb-12 text-center md:text-left">
        <h1 class="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">${profile.name}</h1>
        <p class="text-lg text-slate-500 mb-4 font-medium">${profile.education}</p>
        <p class="text-xl font-bold gradient-text mb-6">${profile.title}</p>
        <div class="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 font-medium">
            <span>📧 ${profile.email}</span>
            <span>🔗 <a href="https://github.com/${profile.github}" target="_blank" class="underline hover:text-blue-600">GitHub</a></span>
        </div>
    </header>
`;

// 섹션 2: 기술 스택 (아이콘 그리드)
const createTechStack = (stack) => `
    <section class="mb-16">
        <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 flex items-center font-bold">
            OFFICIAL TECH STACK <span class="ml-2 h-px bg-slate-200 flex-grow"></span>
        </h2>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
            ${stack.map(tech => `
                <div class="tech-card flex flex-col items-center p-2 rounded-xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white transition">
                    <img src="${tech.img}" alt="${tech.name}" class="h-10 w-10 object-contain mb-2 filter drop-shadow-sm" onerror="this.src='https://via.placeholder.com/40?text=${tech.name}'">
                    <span class="text-[10px] font-bold text-slate-500 uppercase">${tech.name}</span>
                </div>
            `).join('')}
        </div>
    </section>
`;

// 섹션 3: 자기소개 (강조 문구)
const createIntro = (intro) => `
    <section class="mb-16 bg-blue-50 p-6 rounded-2xl border-l-8 border-blue-600 shadow-sm">
        <p class="text-lg leading-relaxed text-slate-700 font-medium italic">"${intro}"</p>
    </section>
`;

// 섹션 4: 프로젝트 리스트
const createProjects = (projects) => `
    <section>
        <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 font-bold">KEY PROJECTS</h2>
        <div class="space-y-8">
            ${projects.map(pj => `
                <div class="group">
                    <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">${pj.title}</h3>
                    <p class="text-xs text-slate-400 mb-2">${pj.period}</p>
                    <p class="text-sm text-slate-600 mb-3 font-medium">${pj.description}</p>
                    <ul class="text-xs text-slate-500 space-y-1 mb-3">
                        ${pj.points.map(pt => `<li>• ${pt}</li>`).join('')}
                    </ul>
                    <a href="${pj.link}" target="_blank" class="text-[10px] font-black text-blue-500 border-b border-blue-500 pb-0.5 hover:text-blue-700 transition">DETAILS</a>
                </div>
            `).join('')}
        </div>
    </section>
`;

// 섹션 5: 상훈 내역
const createAwards = (awards) => `
    <section>
        <h2 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 font-bold">AWARDS</h2>
        <div class="space-y-4">
            ${awards.map(aw => `
                <div class="flex justify-between items-center p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition">
                    <div>
                        <p class="text-xs font-bold text-slate-800">${aw.title}</p>
                        <p class="text-[10px] text-slate-400 font-medium">${aw.org}</p>
                    </div>
                    <span class="text-[10px] font-black text-slate-300 whitespace-nowrap ml-2">${aw.date}</span>
                </div>
            `).join('')}
        </div>
    </section>
`;

// 전체 조립 및 렌더링
function renderResume() {
    const app = document.getElementById('resume-app');
    app.innerHTML = `
        <div class="max-w-4xl mx-auto my-12 p-8 sm:p-12 bg-white shadow-2xl rounded-3xl border border-slate-100">
            ${createHeader(resumeData.profile)}
            ${createTechStack(resumeData.techStack)}
            ${createIntro(resumeData.profile.intro)}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                ${createProjects(resumeData.projects)}
                ${createAwards(resumeData.awards)}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderResume);
