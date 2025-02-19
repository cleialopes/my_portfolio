document.addEventListener("DOMContentLoaded", function () {
    console.log("JS cargado correctamente");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Mostrando sección:", entry.target.id);
                entry.target.classList.remove("hidden"); // Elimina la clase que oculta
                entry.target.classList.add("visible", "animate"); // Aplica las animaciones
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in").forEach(section => {
        observer.observe(section);
    });

    // Botón de cambio de tema
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "🌙";
    themeToggle.classList.add("toggle-theme");
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
});

