document.addEventListener("DOMContentLoaded", function () {
    console.log("JS cargado correctamente");

    // Animación de visibilidad en secciones al hacer scroll
    const sections = document.querySelectorAll("section, .fade-in");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Mostrando sección:", entry.target.id);
                entry.target.classList.add("visible", "animate");
                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target);
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

    // Botón de cambio de tema
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "🌙";
    themeToggle.classList.add("toggle-theme");
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });
});
