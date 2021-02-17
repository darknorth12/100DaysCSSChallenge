var menuIconElement = document.getElementsByClassName("menu-icon");
var childrens = document.querySelectorAll("[class^=line]");

menuIconElement[0].addEventListener("click", () => {
  let classes = menuIconElement[0].classList;
  removeNoAnimationClass();
  if (classes.contains("active")) {
    classes.remove("active");
  } else {
    classes.add("active");
  }
});

var removeNoAnimationClass = () => {
  childrens.forEach((element) => {
    element.classList.remove("no-animation");
  });
};
