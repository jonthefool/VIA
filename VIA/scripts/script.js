let lastScroll = 0;
// Usando o ID 'navbar' que está em todas as páginas
const navbar = document.getElementById('navbar');
// Selecionando o elemento hero apenas na página principal
const hero = document.querySelector('.hero'); 

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Esconde navbar ao rolar (para todas as páginas)
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.top = '-100px'; 
  } else {
    navbar.style.top = '0';
  }

  // Efeito de zoom no Hero Section (apenas na página principal)
  if (hero) {
    if (currentScroll > lastScroll && currentScroll > 80) {
      hero.classList.add('enlarged');
    } else {
      hero.classList.remove('enlarged');
    }
  }

  lastScroll = currentScroll;
});