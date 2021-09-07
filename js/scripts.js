const btnMobile = document.getElementById('btn-mobile');

const close1 = document.getElementById('close-1');
const close2 = document.getElementById('close-2');
const close3 = document.getElementById('close-3');
const close4 = document.getElementById('close-4');


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

}

close1.addEventListener('click', closeMenu);
close2.addEventListener('click', closeMenu);
close3.addEventListener('click', closeMenu);
close4.addEventListener('click', closeMenu);

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);