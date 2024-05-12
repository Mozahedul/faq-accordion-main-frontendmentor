const accordionBtns = document.getElementsByClassName("accordion-btn");
const details = document.getElementsByClassName("details");
const expandIcons = document.getElementsByClassName("expand-icon");
console.log("expandIcons", expandIcons);

// Keep open the default accordion menu
document.addEventListener("DOMContentLoaded", function () {
  details[0].classList.add("default-accordion");
  expandIcons[0].src = "./assets/images/icon-minus.svg";
});

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener("click", function () {
    if (details[i].offsetHeight !== details[i].scrollHeight) {
      details[i].style.height = details[i].scrollHeight + "px";
      expandIcons[i].src = "./assets/images/icon-minus.svg";
    } else {
      details[i].style.height = 0 + "px";
      expandIcons[i].src = "./assets/images/icon-plus.svg";
    }

    for (let j = 0; j < details.length; j++) {
      if (i !== j) {
        details[j].style.height = 0 + "px";
        expandIcons[j].src = "./assets/images/icon-plus.svg";
      }
    }
  });
}
