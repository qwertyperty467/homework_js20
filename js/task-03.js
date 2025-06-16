const form = document.getElementById("form-task3")

form.addEventListener("change", onRadioBtnClick)

function onRadioBtnClick(event) {
// console.log(event.target.value);
document.body.style.backgroundColor = event.target.value
}   