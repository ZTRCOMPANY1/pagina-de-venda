// Script simples para suavizar a rolagem ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicionar animação ao rolar a página (opcional)
window.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.beneficio-item, .livro-item, .depoimento-item');
    const alturaTela = window.innerHeight;

    elementos.forEach(elemento => {
        const posicaoElemento = elemento.getBoundingClientRect().top;
        if (posicaoElemento < alturaTela - 100) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }
    });
});

// Inicializar opacidade 0 para animação
document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.beneficio-item, .livro-item, .depoimento-item');
    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
});