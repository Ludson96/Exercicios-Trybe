// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function href(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', href);


function checkbox(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', checkbox);

function text(event) {
  let tecla = event.key;
  if (tecla !== 'a') {
    event.preventDefault();
  }
}

INPUT_TEXT.addEventListener('keypress', text);