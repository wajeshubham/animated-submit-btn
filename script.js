let btn = document.querySelector("[data-btn]");
btn.addEventListener("click", () => {
  btn.textContent = "";
  btn.classList.toggle("animating");
});
