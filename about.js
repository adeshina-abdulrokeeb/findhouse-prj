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

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".section4-card h3");

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target"));
      const type = counter.getAttribute("data-type");
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let count = 0;

      const updateCounter = () => {
        count += step;

        if (count < target) {
          if (type === "money") {
            counter.textContent = `₦${count}M+`; 
          } else {
            counter.textContent = count.toLocaleString();
          }
          requestAnimationFrame(updateCounter);
        } else {
          if (type === "money") {
            counter.textContent = `₦${target}M+`;
          } else {
            counter.textContent = target.toLocaleString();
          }
        }
      };

      updateCounter();
    });
  };

  // Observer runs EVERY time section4 enters viewport
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    },
    { threshold: 1.0 }
  );

  observer.observe(document.querySelector(".section4"));
});

