document.addEventListener("DOMContentLoaded", () => {
    // Animación de visibilidad en secciones al hacer scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Animación de barra de progreso en resume.html
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});
