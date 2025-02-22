const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("list-items");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
