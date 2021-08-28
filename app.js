let text_buttons = document.getElementsByClassName("text__button");
let result = document.getElementById("score__text");

const findResult = (text) => {
  console.log(text);
};

const textButtonClicked = (e) => {
  let text = e.srcElement.innerHTML;

  if (text === "C") {
    result.innerHTML = "0";
  } else if (text === "=") {
    result.innerHTML = findResult(result.innerHTML);
  } else if (result.innerHTML !== "0" || text === ".") {
    result.innerHTML += text;
  } else {
    result.innerHTML = text;
  }
};

for (let i = 0; i < text_buttons.length; i++) {
  text_buttons[i].addEventListener("click", textButtonClicked);
}
