// get menu icon element
const menuIcon = document.querySelector(".menu-icon");

// get nav links
const navLinks = document.querySelector("ul");

// event handler for the menu icon when clicked
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("visible");
});
