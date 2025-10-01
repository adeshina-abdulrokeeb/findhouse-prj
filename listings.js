function toggleFavorite(el) {
  const svg = el.querySelector('.heart');

  if (svg.classList.contains('favorited')) {
    svg.classList.remove('favorited');
  } else {
    svg.classList.add('favorited');
    svg.classList.add('animate');

    svg.addEventListener('animationend', () => {
      svg.classList.remove('animate');
    }, { once: true });
  }
}

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



