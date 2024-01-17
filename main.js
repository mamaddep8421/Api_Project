import "./style.css";
// coded btn theme change:
// get btn dark for change to white:
const Btn_Dark = document.getElementById("change_dark");
// get btn white for change to dark:
const Btn_white = document.getElementById("change_white");
// get span element for change text to dark and white:
const span_text = document.getElementsByClassName("swicht_Theme");
// coded to change for time click:
Btn_Dark.addEventListener("click", () => {
  document.body.classList.remove("white_theme");
  document.body.classList.add("dark_theme");
  span_text[0].innerHTML = "White";
});
Btn_white.addEventListener("click", () => {
  document.body.classList.remove("dark_theme");
  document.body.classList.add("white_theme");
  span_text[0].innerHTML = "Dark";
});
