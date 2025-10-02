// ===== Highlight Active Navigation Link =====
const links = document.querySelectorAll('.navList a');
const currentURL = window.location.href;

links.forEach(link => {
  // Check if the link's href matches the current page URL
  if (link.href === currentURL) {
    link.classList.add('active'); // Highlight the current page
  } else {
    link.classList.remove('active'); // Remove active class from others
  }
});

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

// ===== Animated Counters in Section 4 =====
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".section4-card h3");

  // Function to animate each counter
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target")); // Final value
      const type = counter.getAttribute("data-type"); // "number" or "money"
      const duration = 2000; // Animation duration (ms)
      const step = Math.ceil(target / (duration / 16)); // Increment per frame
      let count = 0;

      // Function to update number gradually
      const updateCounter = () => {
        count += step;

        if (count < target) {
          // Format depending on type
          if (type === "money") {
            counter.textContent = `₦${count}M+`; 
          } else {
            counter.textContent = count.toLocaleString();
          }
          requestAnimationFrame(updateCounter); // Keep animating
        } else {
          // Ensure final value is correct
          if (type === "money") {
            counter.textContent = `₦${target}M+`;
          } else {
            counter.textContent = target.toLocaleString();
          }
        }
      };

      updateCounter(); // Start animation
    });
  };

  // ===== Intersection Observer =====
  // Triggers animation ONLY when section4 is fully visible
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters(); // Start counters
      }
    },
    { threshold: 1.0 } // Require 100% of section to be visible
  );

  observer.observe(document.querySelector(".section4"));
});