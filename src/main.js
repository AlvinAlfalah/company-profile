// HAMBURGER

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// SCROLL UP

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

// SCROLL REVEAL

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data, .about__top, .service__top, .news__letter");
sr.reveal(".home__image", {
  delay: 1000,
  scale: 0.7,
});

sr.reveal(".foot__icon, .foot__content, .copy__right", {
  delay: 300,
});

sr.reveal(".service__card", { interval: 300 });

sr.reveal(".about__item__1-img, .about__item__2-text", {
  origin: "left",
  interval: 300,
});
sr.reveal(".about__item__2-img, .about__item__1-text", {
  origin: "right",
  interval: 300,
});

// // FIXED NAVBAR

// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };
