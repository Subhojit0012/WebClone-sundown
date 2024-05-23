const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const elemC = document.querySelector(".elem-container");
var fixedIMG = document.querySelector("#fixed-images");

elemC.addEventListener("mouseenter", function () {
  fixedIMG.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
  fixedIMG.style.display = "none";
});

const elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixedIMG.style.backgroundImage = `url(${image})`;
  });
});
