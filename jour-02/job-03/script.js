const textDisplayer = document.querySelector("#text-displayer");
const inputText = document.querySelector("#input-text");
const turnBold = document.querySelector("#turn-text-bold");
const turnItalic = document.querySelector("#turn-text-italic");
const clearText = document.querySelector("#clear-text");

let text = "";

function myDisplayText() {
  textDisplayer.innerText = text;
}

function myTurnBold() {
  textDisplayer.style.fontWeight = "bold";
}

function myTurnItalic() {
  textDisplayer.style.fontStyle = "italic";
}

function myClearText() {
  textDisplayer.style.fontWeight = "normal";
  textDisplayer.style.fontSyle = "normal";
}

inputText.addEventListener("keyup", () => {
  text = inputText.value;
  myDisplayText();
});

turnBold.addEventListener("click", () => {
  myTurnBold();
});

turnItalic.addEventListener("click", () => {
  myTurnItalic();
});

clearText.addEventListener("click", () => {
  myClearText();
});
