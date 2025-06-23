// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input
// (подія input), підставляє його поточне значення в span#name-output.
//  якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст
// на правильну кількість символів.

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const inputName = document.getElementById("name-input");
const span = document.getElementById("name-output");
const inputLength = document.getElementById("validation-input");

inputName.addEventListener("input", NameOnInput);

function NameOnInput() {
  if (inputName.value === "") {
    span.textContent = "незнайомець";
  } else {
    span.textContent = inputName.value;
  }
}

inputLength.addEventListener("input", LengthOfInput);

function LengthOfInput() {
  if (inputLength.value.length === Number(inputLength.dataset.length)) {
    inputLength.classList.remove("invalid");
    inputLength.classList.add("valid");
  } else {
    inputLength.classList.remove("valid");
    inputLength.classList.add("invalid");
  }
}

