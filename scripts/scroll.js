// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800
});

// Scroll To Top Button
const scrollTop = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
})
