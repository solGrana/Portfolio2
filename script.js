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


/*   <header>
<div class="intro">
<br><br>
<h1><span id="typewriter"></span></h1>
</div>
<nav>
<br><br> <br>
<a href="#about">Sobre mí</a>
<a href="#projects">Proyectos</a>
</nav>
</header>*/