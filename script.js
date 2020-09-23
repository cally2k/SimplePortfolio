// Navbar Burger Menu

const navMenu = () => {
  const burger = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        nav.style.animation = "";
        link.style.animation = "";
      } else {
        nav.style.animation = `slide .5s ease forwards`
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("open");
  });
}

// Enable animations
const app = () => {
  navMenu();
};

app();