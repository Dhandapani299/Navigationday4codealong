const $burger = document.querySelector(".burger");
const $navlink = document.querySelector(".nav-link");

const $navlinks = document.querySelectorAll(".nav-link li");

$burger.onclick = () => {
  $navlink.classList.toggle("nav-click");
  $burger.classList.toggle("burger-clicked");

  $navlinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkAnimation 0.5s ease forwards ${
        index / 5 + 0.5
      }s`;
    }
  });
};
