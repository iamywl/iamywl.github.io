function render() {
    const app = document.getElementById('resume-app');
    if(!app) return;
    app.innerHTML = `
        <div class="max-w-4xl mx-auto my-12 p-8 bg-white shadow-2xl rounded-3xl">
            ${Templates.header(profile)}
            ${Templates.tech(techStack)}
            ${Templates.intro(profile.intro)}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div id="project-list"></div>
                <div id="award-list"></div>
            </div>
        </div>`;
}
document.addEventListener('DOMContentLoaded', render);
