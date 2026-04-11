const menuBtn = document.getElementById('menuBtn');
const backdrop = document.getElementById('backdrop');
const nav = document.querySelector('.nav__links');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
  backdrop.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

backdrop.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuBtn.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', false);
  document.body.style.overflow = '';
})