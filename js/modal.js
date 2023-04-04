const modalWrapper = document.querySelector("#modalWrapper");
const modalWindow = document.querySelector("#modalWindow");
const closeModal = document.querySelector("#closeModal");
const restartBtn = document.querySelector("#restart");

modalWrapper.addEventListener("click", handleModal);
closeModal.addEventListener("click", handleModal);
restartBtn.addEventListener("click", handleReset);

function handleModal(e) {
  modalWrapper.classList.toggle("d-none");
}
function handleReset() {
  sessionStorage.removeItem("randomNums");
  randomNums.length = 0;
  modalWrapper.classList.toggle("d-none");
}

modalWindow.addEventListener("click", function (e) {
  e.stopPropagation();

})
