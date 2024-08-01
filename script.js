window.onload = function () {
  document.getElementById("form").reset();
};

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".navLinks");

// console.log(menu);
// console.log(navLinks);

menu.addEventListener("click", function () {
  console.log("HELLLO");
  if (navLinks.style.display === "none" || navLinks.style.display === "") {
    navLinks.classList.toggle("active");
  }
});
