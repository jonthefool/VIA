let lastScroll = 0;
// Usando o ID 'navbar' que está no HTML
const navbar = document.getElementById('navbar'); 

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Esconde navbar ao rolar (igual a sobre.js)
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.top = '-100px'; 
  } else {
    navbar.style.top = '0';
  }
  lastScroll = currentScroll;
});