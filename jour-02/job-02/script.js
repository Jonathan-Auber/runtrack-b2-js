const counter = document.querySelector("#count-displayer");
const increment = document.querySelector("#increment");
let count = 0;

function myAddCount() {
  count++;
  counter.innerText = count;
}
increment.addEventListener("click", () => {
  myAddCount();
});
