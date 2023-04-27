const burgerButton = document.querySelector(".burger-button");
const headerNav = document.querySelector(".header__column");

function headerMenuOpen() {
  burgerButton.classList.toggle("burger-button--active");
  headerNav.classList.toggle("header__column--open");
}

document.body.addEventListener("click", function (event) {
  let eventTarget = event.target.parentElement.parentElement.parentElement;
  if (event.target === burgerButton) {
    headerMenuOpen();
  } else if (eventTarget !== headerNav) {
    burgerButton.classList.remove("burger-button--active");
    headerNav.classList.remove("header__column--open");
  } else if (event.target === headerNav) {
    return;
  }
});
