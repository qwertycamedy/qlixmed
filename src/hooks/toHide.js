const { disableScroll } = require("./disableScroll");
const { enableScroll } = require("./enableScroll");

export const onHide = (boolly) => {
  const toHide = document.querySelectorAll(".toHide");
  if (!boolly) {
    disableScroll();

    toHide.forEach(elem => {
      elem.classList.add("visually-hidden");
    });
  } else {
    enableScroll();

    toHide.forEach(elem => {
      elem.classList.remove("visually-hidden");
    });
  }
};
