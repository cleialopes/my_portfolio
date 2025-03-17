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

    // Menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const menuIcon = document.querySelector(".menu-toggle i");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        // Cambia el ícono entre hamburguesa y "X"
        if (navMenu.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times"); // Ícono de cerrar
        } else {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars"); // Ícono de hamburguesa
        }
    });
});