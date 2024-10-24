document.addEventListener("DOMContentLoaded", () => {
    const text = "Hola, soy Sol Graña";
    let index = 0;
    const typewriterElement = document.getElementById("typewriter");

    function typeEffect() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
