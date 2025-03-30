/*document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces de navegación
    var navLinks = document.querySelectorAll('.nav-link');

    // Agrega un controlador de eventos para cada enlace de navegación
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Oculta todas las secciones
            var sections = document.querySelectorAll('.content-section');
            sections.forEach(function(section) {
                section.style.display = 'none';
            });

            // Obtiene el ID de la sección correspondiente al enlace de navegación
            var targetId = navLink.getAttribute('href');

            // Muestra la sección correspondiente
            var targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu_principal a");
    const firstSection = document.querySelector(".section-conteiner");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            // Ocultar la sección inicial al hacer clic en cualquier enlace del menú
            firstSection.style.display = "none";

            const sections = document.querySelectorAll(".content-section");

            sections.forEach(section => {
                section.style.display = "none";
            });

            targetSection.style.display = "block";
        });
    });
});
