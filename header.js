import { debounce, throttle } from "/main.js";

(() => {
  const $homeHeader = document.querySelector("#home-header");

  if (!($homeHeader instanceof HTMLElement)) {
    console.log("header no encontrado");
    return;
  }

  function checkScrollPosition() {
    if (window.scrollY !== 0) {
      $homeHeader.classList.add("home-header-top");
      return;
    }

    $homeHeader.classList.remove("home-header-top");
  }

  const debounceCheckScrollPosition = debounce(checkScrollPosition, 100);
  const throttleCheckScrollPosition = throttle(checkScrollPosition, 300);

  window.addEventListener("scroll", () => {
    throttleCheckScrollPosition();
    debounceCheckScrollPosition();
  });

  checkScrollPosition();

  const $menuHamburguesa = document.querySelector(".menu-hamburguesa");
  const $menuDesplegable = document.querySelector(".menu-desplegable");

  if (
    !($menuHamburguesa instanceof HTMLElement) ||
    !($menuDesplegable instanceof HTMLElement)
  ) {
    console.log("menu hamburguesa o desplegable no encontrado");
    return;
  }
  const classMenuHamburguesa = "menu-hamburguesa--abierto";

  $menuHamburguesa.addEventListener("click", () => {
    const isOpen = $menuHamburguesa.classList.contains(classMenuHamburguesa);

    if (isOpen) {
      $menuHamburguesa.classList.remove(classMenuHamburguesa);
      return;
    }

    $menuHamburguesa.classList.add(classMenuHamburguesa);
  });

  document.addEventListener("click", (event) => {
    const isOpen = $menuHamburguesa.classList.contains(classMenuHamburguesa);

    if (
      !$menuHamburguesa.contains(event.target) &&
      $menuDesplegable !== event.target &&
      isOpen
    ) {
      $menuHamburguesa.classList.remove(classMenuHamburguesa);
    }
  });
})();