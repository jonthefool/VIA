let lastScroll = 0;
// CORREÇÃO: Usando o ID 'navbar' que está no HTML
const navbar = document.getElementById('navbar'); 
// Variáveis de efeito removidas: const aboutImage, const fadeElements

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Esconde navbar ao rolar (usando a ID 'navbar')
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.top = '-100px'; 
  } else {
    navbar.style.top = '0';
  }
  lastScroll = currentScroll;
});