const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('menuOverlay');
const backdrop = document.getElementById('backdrop');

function openMenu() {
  if (!overlay.querySelector('header nav')) {
    const nav = document.querySelector('header nav');
    const toggle = document.querySelector('.nav__toggle');

    const clonedNav = nav.cloneNode(true);
    const clonedToggle = toggle.cloneNode(true); 

    overlay.appendChild(clonedNav);
    overlay.appendChild(clonedToggle); 
  } 
  overlay.classList.add('open');
  backdrop.classList.add('active');
  menuBtn.classList.add('open');
  
  const clonedToggle = overlay.querySelector('.nav__toggle');
  if (clonedToggle) {
    clonedToggle.classList.add('open');
  }

  menuBtn.setAttribute('aria-exapnded', true);   
}

function closeMenu() {
  overlay.innerHTML = '';
  overlay.classList.remove('open');
  backdrop.classList.remove('active');
  menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-exapanded', false);
}

menuBtn.addEventListener('click', () => {
  overlay.classList.contains('open')? closeMenu() : openMenu();
});