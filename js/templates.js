const Templates = {
    header: (p) => `
        <header class="mb-12 text-center md:text-left">
            <h1 class="text-5xl font-extrabold text-slate-900 mb-2">${p.name}</h1>
            <p class="text-xl font-bold gradient-text mb-6">${p.title}</p>
            <div class="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600">
                <span>📧 ${p.email}</span>
                <span>🔗 <a href="https://github.com/${p.github}" target="_blank" class="underline">GitHub</a></span>
            </div>
        </header>`,
    
    intro: (text) => `
        <section class="mb-16 bg-blue-50 p-6 rounded-2xl border-l-8 border-blue-600">
            <p class="text-lg italic text-slate-700">"${text}"</p>
        </section>`,

    tech: (stack) => `
        <div class="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
            ${stack.map(s => `<div class="p-2 bg-slate-50 rounded-xl text-center"><img src="${s.img}" class="h-10 mx-auto mb-2"><span class="text-[10px] font-bold uppercase">${s.name}</span></div>`).join('')}
        </div>`
};
