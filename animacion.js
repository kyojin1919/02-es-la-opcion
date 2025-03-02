document.addEventListener("DOMContentLoaded", function () {
    // Función para detectar el scroll y activar la animación
    function animateOnScroll() {
        let elements = document.querySelectorAll('.fade-in');
        let windowHeight = window.innerHeight;

        elements.forEach(element => {
            let elementTop = element.getBoundingClientRect().top;
            let visible = 150; // Margen para activar la animación

            if (elementTop < windowHeight - visible) {
                element.classList.add('active');
            }
        });
    }

    // Activamos la función en el scroll
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Para activar elementos visibles al cargar la página
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para ejecutar la animación al cargar la página
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".curso-card, .recurso-card");

    function checkScroll() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const eventos = document.querySelectorAll(".evento");

    function checkScroll() {
        eventos.forEach((evento) => {
            const position = evento.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                evento.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });
});