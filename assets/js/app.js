let burgerMenu = document.querySelector(".burger");
let ul = document.querySelector("header ul");
burgerMenu.addEventListener("click", () => {
  ul.classList.toggle("active");

  if ([...ul.classList].includes("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
