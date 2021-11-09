// get menu icon element
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Get the bars of the hamburger menu
const portfolio = document.querySelector(".portfolio-link");
const aboutUs = document.querySelector(".about-link");
const contactLink = document.querySelector(".contact-link");

const close = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

portfolio.addEventListener("click", () => {
  close();
});

aboutUs.addEventListener("click", () => {
  close();
});

contactLink.addEventListener("click", () => {
  close();
});
