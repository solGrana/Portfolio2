function toggleDescription(button) {
    const cardContent = button.parentElement;
    const moreText = cardContent.querySelector('.more-text');
    const card = cardContent.closest('.card');
    const imagePC = card.querySelector('.image-pc');
    const imageMobile = card.querySelector('.image-mobile');

    cardContent.classList.toggle('expanded');
    if (cardContent.classList.contains('expanded')) {
        moreText.style.display = 'inline';
        button.textContent = 'Ver menos';
        imagePC.style.display = 'none';
        imageMobile.style.display = 'block';
        const cardRect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTo = cardRect.top + window.scrollY - (windowHeight / 2) + (cardRect.height / 2);
        const maxScroll = document.documentElement.scrollHeight - windowHeight;
        const finalScrollPosition = Math.min(scrollTo, maxScroll);
        window.scrollTo({ top: finalScrollPosition, behavior: 'smooth' });
        if (scrollTo > maxScroll) {
            window.scrollTo({ top: maxScroll, behavior: 'smooth' });
        }
    } else {
        moreText.style.display = 'none';
        button.textContent = 'Ver más';
        imagePC.style.display = 'block';
        imageMobile.style.display = 'none';
    }
}

const text = "Hola! Soy Sol!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;
