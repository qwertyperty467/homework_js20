// 3. Напиши скрипт, який реагує на зміну значення input
// #font-size-control (подія input) і змінює інлайн-стиль
//  span#text оновлюючи властивість font-size. В результаті 
//  при перетягуванні повзунка змінюватиметься розмір тексту.

const controler = document.getElementById("font-size-control")
const text = document.getElementById("text")

controler.addEventListener("input", ScrollOnInput)
function ScrollOnInput() {
 console.log(controler.value);
text.style.fontSize = `${controler.value}px`
}