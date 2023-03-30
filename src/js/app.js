import { spoller } from "./modules/jqFunctions.js";
import { removeClasses } from "./modules/isMobile.js";
import { isMobile } from "./modules/isMobile.js";
import { spollers } from "./modules/spollers.js";
import * as flsFunctions from "./modules/webp.js";
import * as slick from "./modules/slider.js";
flsFunctions.isWebp();
slick.slider();
spollers();

// if( isMobile.any() ) {} alert('Mobile');

window.onload = function () {
  document.addEventListener("click", documentActions);
};
function documentActions(e) {
  const targetElement = e.target;
  if (window.innerWidth > 768 && isMobile.any()) {
    if (targetElement.classList.contains("menu__arrow")) {
      targetElement.closest(".menu__item").classList.toggle("_hover");
    }
    if (
      !targetElement.closest(".menu__item") &&
      document.querySelectorAll(".menu__item._hover").length > 0
    ) {
      removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
      console.log("complete");
    }
  }
  if (targetElement.classList.contains("search-form__icon")) {
    document.querySelector(".search-form").classList.toggle("_active");
  } else if (
    !targetElement.closest(".search-form") &&
    document.querySelector(".search-form._active")
  ) {
    document.querySelector(".search-form").classList.remove("_active");
  }
}
