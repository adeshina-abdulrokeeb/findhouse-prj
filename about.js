const links = document.querySelectorAll('.navList a');
const currentURL = window.location.href;

links.forEach(link => {
  if (link.href === currentURL) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

