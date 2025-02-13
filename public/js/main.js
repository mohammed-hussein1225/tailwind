//  navbar script for mobile
function toggle_navbar() {
  let links = document.querySelector(".nav-mobile .head .links");

  // click on bars to open nvbar
  let icon = document.querySelector(".nav-mobile .toggle");
  icon.addEventListener("click", function () {
    links.classList.remove("-translate-x-full");
  });

  // click on btn close to close nvbar
  let close = document.querySelector(".nav-mobile .head .close");
  close.addEventListener("click", function () {
    links.classList.add("-translate-x-full");
  });

  // click on anywher on window  to close nvbar
  window.addEventListener("click", (event) => {
    if (!links.contains(event.target) && !icon.contains(event.target)) {
      links.classList.add("-translate-x-full");
    }
  });
}
toggle_navbar();
