export const Modal = {
  modalWrapper: document.querySelector(".modal-wrapper"),
  btnClose: document.querySelector(".close"),
  modalSpan: document.querySelector("span"),

  open() {
    Modal.modalWrapper.classList.add("open")
  },
  close() {
    Modal.modalWrapper.classList.remove("open")
  },
}
document.addEventListener("keydown", closeButtonEscape)
Modal.btnClose.addEventListener("click", closeButtonEscape)

function closeButtonEscape(event) {
  Modal.close()
  if (event.key === "Escape") {
    Modal.close()
  }
}


