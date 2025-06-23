const openBtn = document.getElementById("open-modal-btn")
const closeBtn = document.getElementById("modal__close__button")
const backdrop = document.getElementById("backdrop")

openBtn.addEventListener("click", onOpenModal)
closeBtn.addEventListener("click", onCloseModal)
backdrop.addEventListener("click", onBackdropClick)

function onOpenModal() {
window.addEventListener("keydown", onEscPress)
    backdrop.classList.add("active")
}

function onCloseModal() {
    window.removeEventListener("keydown", onEscPress)
        backdrop.classList.remove("active")
}

function onEscPress(event) {
console.log(event.code); 
if (event.code === "Escape") {
    onCloseModal()
}
}

function onBackdropClick(event) {
    if(event.target === event.currentTarget) {
onCloseModal
    } else {

    }
    console.log(event.currentTarget);
}