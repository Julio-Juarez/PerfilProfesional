// Añadir animación de aparición de las secciones al hacer scroll
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const triggerBottom = window.innerHeight * 0.85;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
});
