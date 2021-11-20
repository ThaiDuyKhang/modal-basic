const modal = document.querySelector(".Modal");
const openModal = document.querySelector(".openModal-btn");
const closeModal = document.querySelector(".closeModal-btn");
const closeModalIcon = document.querySelector(".Modal__header svg");

const toggleModal = () => {
  modal.classList.toggle("hiddenModal");
};
openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
closeModalIcon.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
