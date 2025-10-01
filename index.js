const counters = document.querySelectorAll(".counter");

const formatNumber = (num, isMoney = false) => {
  if (isMoney) {
    if (num >= 1_000_000_000) return "₦" + (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return "₦" + (num / 1_000_000).toFixed(0) + "M";
    if (num >= 1_000) return "₦" + (num / 1_000).toFixed(0) + "K";
    return "₦" + num;
  }
  return num.toLocaleString();
};

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const isMoney = counter.dataset.money === "true";
    let count = 0;

    const update = () => {
      const increment = Math.ceil((target - count) / 15);

      if (count < target) {
        count += increment;
        counter.innerText = formatNumber(count, isMoney);
        requestAnimationFrame(update);
      } else {
        counter.innerText = formatNumber(target, isMoney);

        // create + sign that fades in
        const plus = document.createElement("span");
        plus.textContent = "+";
        plus.style.opacity = 0;
        plus.style.transition = "opacity 0.6s ease-in";
        counter.appendChild(plus);

        // trigger fade-in
        setTimeout(() => {
          plus.style.opacity = 1;
        }, 100);
      }
    };

    update();
  });
};

// Run only when section is visible
const statsSection = document.querySelector(".stats");
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    observer.disconnect();
  }
}, { threshold: 0.5 });

observer.observe(statsSection);

//property love toggle 
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
// Navigation active link and mobile menu
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


