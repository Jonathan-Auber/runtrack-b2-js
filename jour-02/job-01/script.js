let size = window.innerWidth;
const el = document.documentElement;

myChangeBackgroundColor();

function myChangeBackgroundColor() {
  if (size >= 1337) {
    el.style.backgroundColor = "#ffb703";
  } else if (size <= 504) {
    el.style.backgroundColor = "#003049";
  } else {
    el.style.backgroundColor = "#d90429";
  }
}

window.addEventListener("resize", () => {
  size = window.innerWidth;
  myChangeBackgroundColor();
});
