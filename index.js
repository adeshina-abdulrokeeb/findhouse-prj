// ===== Mobile Navigation (Hamburger Menu) =====
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

// Toggle navigation when hamburger is clicked
hamburger.addEventListener("click", () => {
  const isActive = hamburger.classList.toggle("active"); // Animate hamburger
  mainNav.classList.toggle("active"); // Slide nav menu in/out

  if (isActive) {
    document.body.classList.add("no-scroll"); // Prevent background scrolling
  } else {
    document.body.classList.remove("no-scroll");
  }
});

// Close nav when clicking outside menu content (on nav background)
mainNav.addEventListener("click", (e) => {
  if (e.target === mainNav) {
    hamburger.classList.remove("active");
    mainNav.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});
//Form Validation

function formatFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

document.getElementById("search-form").addEventListener("submit", function (e) {
  const input = document.getElementById("cityname");
  const errorMsg = input.nextElementSibling;

  if (input.value.trim() === "") {
    e.preventDefault(); // Prevent form submission
    errorMsg.style.visibility = "visible"; // Show the error message
    input.classList.add("error");
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

function toggleFavorite(el) {
  const svg = el.querySelector(".heart");

  if (svg.classList.contains("favorited")) {
    svg.classList.remove("favorited");
  } else {
    svg.classList.add("favorited");
    svg.classList.add("animate");

    svg.addEventListener(
      "animationend",
      () => {
        svg.classList.remove("animate");
      },
      { once: true }
    );
  }
}