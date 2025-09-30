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



