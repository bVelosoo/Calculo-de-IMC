import { Modal } from "./modal.js"
import { calculateIMC, validation } from "./utils.js"
import { AlertError } from "./alert-error.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calculateIMC(weight, height)

  const isWeightOrHeightNaN = validation(weight) || validation(height)

  if (isWeightOrHeightNaN) {
    AlertError.open()
    return
  }
  AlertError.close()
  function DisplayResult() {
    Modal.open()
    Modal.modalSpan.innerText = `Seu IMC é de ${result}`
  }
  DisplayResult()
}
