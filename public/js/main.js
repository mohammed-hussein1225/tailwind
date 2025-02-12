const link = document.querySelectorAll(".links .link");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    for (let j = 0; j < link.length; j++) {
      link[j].classList.remove("animation");
    }
    link[i].classList.add("animation");
  });
}
