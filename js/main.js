const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const miniHeader = document.querySelector(".mini-header");

burger.addEventListener("click", function () {
  miniHeader.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  miniHeader.classList.remove("active");
});
