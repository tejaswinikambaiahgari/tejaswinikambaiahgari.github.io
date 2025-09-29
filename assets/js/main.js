/* ============================
   MAIN.JS for Portfolio
============================ */

// Wait for DOM load
document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------
     Navbar scroll color change
  ------------------------------ */
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* ------------------------------
     Mobile nav toggle
  ------------------------------ */
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector("#navmenu");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("bi-list");
      navToggle.classList.toggle("bi-x");
    });
  }

  /* ------------------------------
     Typed.js effect
  ------------------------------ */
  if (document.querySelector(".typed")) {
    let typedStrings = document.querySelector(".typed").getAttribute("data-typed-items");
    typedStrings = typedStrings.split(",");
    new Typed(".typed", {
      strings: typedStrings,
      loop: true,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000
    });
  }

  /* ------------------------------
     Skills carousel scroll
  ------------------------------ */
  const skillsCarousel = document.querySelector(".skills-carousel");
  if (skillsCarousel) {
    let isDown = false;
    let startX;
    let scrollLeft;

    skillsCarousel.addEventListener("mousedown", (e) => {
      isDown = true;
      skillsCarousel.classList.add("active");
      startX = e.pageX - skillsCarousel.offsetLeft;
      scrollLeft = skillsCarousel.scrollLeft;
    });
    skillsCarousel.addEventListener("mouseleave", () => {
      isDown = false;
      skillsCarousel.classList.remove("active");
    });
    skillsCarousel.addEventListener("mouseup", () => {
      isDown = false;
      skillsCarousel.classList.remove("active");
    });
    skillsCarousel.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - skillsCarousel.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      skillsCarousel.scrollLeft = scrollLeft - walk;
    });
  }

  /* ------------------------------
     AOS Init (scroll animations)
  ------------------------------ */
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

});
