const links = document.querySelectorAll('.navList a');
const currentURL = window.location.href;

links.forEach(link => {
  if (link.href === currentURL) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.mainNav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mainNav.classList.remove('active');
  overlay.classList.remove('active');
});

document.querySelectorAll('.navList a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    overlay.classList.remove('active');
  });
});
