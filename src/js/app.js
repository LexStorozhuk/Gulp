import { spoller } from "./modules/jqFunctions.js";
import { removeClasses } from "./modules/isMobile.js";
import { isMobile } from "./modules/isMobile.js";
import { spollers } from "./modules/spollers.js";
import { select } from "./modules/select.js";
import { rangeInit } from "./modules/range.js";
import { shareInit } from "./modules/share.js";
import { validation } from "./modules/validation.js";
import { slider } from "./modules/slider.js";
import * as flsFunctions from "./modules/webp.js";
flsFunctions.isWebp();
slider();
spollers();
select();
rangeInit();
shareInit();
// if( isMobile.any() ) {} alert('Mobile');

document.addEventListener("DOMContentLoaded", validation()); 
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

