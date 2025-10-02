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


//Form Validation

function formatFieldName(input) {
  return input.id.charAt(0).toUppercase() + input.id.slice(1);
}

document.getElementById("search-form").addEventListener("submit", function (e) {
  const input = document.getElementById("cityname");
  const errorMsg = input.nextElementSibling;

  if (input.value.trim() === "") {
    e.preventDefault(); // Prevent form submission
    errorMsg.style.visibility = "visible"; // Show the error message
    input.classList.add("error"); // Optional: add a class for styling
  } else {
    errorMsg.style.visibility = "hidden";
    input.classList.remove("error");
  }
});

const prices = document.querySelector(".prices");
const input = prices.querySelector("input");
const options = prices.querySelectorAll(".dropdown-menu button");

// Toggle dropdown when clicking the box
prices.addEventListener("click", (e) => {
  if (e.target.closest(".dropdown-box")) {
    prices.classList.toggle("active");
  }
});

// Handle option clicks
options.forEach(option => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    input.value = option.textContent;
    prices.classList.remove("active");
  });
});

// Close if clicking outside
document.addEventListener("click", (e) => {
  if (!prices.contains(e.target)) {
    prices.classList.remove("active");
  }
});

// TYPE DROPDOWN
const typeCont = document.querySelector('.type-cont');
const typeBox = typeCont.querySelector('.type-box');
const typeInput = document.getElementById('typeInput');
const typeOptions = typeCont.querySelectorAll('.type-menu button');

// toggle open/close
typeBox.addEventListener('click', () => {
  typeCont.classList.toggle('open');
});

// pick option
typeOptions.forEach(option => {
  option.addEventListener('click', () => {
    typeInput.value = option.textContent;
    typeCont.classList.remove('open');
  });
});

// close if clicking outside
document.addEventListener('click', (e) => {
  if (!typeCont.contains(e.target)) {
    typeCont.classList.remove('open');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const statsCards = document.querySelectorAll(".stat-card h2");

  const statsObserverAlways = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numberEl = entry.target;
          const target = parseInt(numberEl.dataset.target);
          const prefix = numberEl.dataset.prefix || "";
          const suffix = numberEl.dataset.suffix || "";
          let current = 0;
          const increment = target / 200; // adjust speed

          const updateNumber = () => {
            current += increment;
            if (current < target) {
              numberEl.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
              requestAnimationFrame(updateNumber);
            } else {
              numberEl.textContent = prefix + target.toLocaleString() + suffix;
            }
          };

          // Reset number before starting animation
          numberEl.textContent = prefix + "0" + suffix;
          updateNumber();
        }
      });
    },
    { threshold: 0.5 } // triggers when 50% of the element is visible
  );

  statsCards.forEach(card => statsObserverAlways.observe(card));
});
