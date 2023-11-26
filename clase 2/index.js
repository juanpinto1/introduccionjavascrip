let borderShow = false
const img = document.querySelector(".panda")
img.addEventListener("click", () => {
    if (!borderShow) {
        img.style.border = "solid red 3px"
        borderShow = true
    }
    else {
        img.style.border = "none"
        borderShow = false
    }
})

let borderShow1 = false
const img1 = document.querySelector(".perro")
img1.addEventListener("click", () => {
    if (!borderShow1) {
        img1.style.border = "solid red 3px"
        borderShow1 = true
    }
    else {
        img1.style.border = "none"
        borderShow1 = false
    }
})

let borderShow2 = false
const img2 = document.querySelector(".sandia")
img2.addEventListener("click", () => {
    if (!borderShow2) {
        img2.style.border = "solid red 3px"
        borderShow2 = true
    }
    else {
        img2.style.border = "none"
        borderShow2 = false
    }
})

const btn = document.querySelector(".mt-2")
const mensaje = document.querySelector(".mensaje")

btn.addEventListener("click", () => {
const [{ value: a }, { value: b }, { value: c }] = document.querySelectorAll("select")
const passowrd = a + b + c
if (passowrd == "311") mensaje.innerHTML = "Password 1 correcto"
else if (passowrd == "516") mensaje.innerHTML = "Password 2 correcto"
else if (passowrd == "123") mensaje.innerHTML = "Password 3 correcto"
else mensaje.innerHTML = "Password incorrecto"
})

