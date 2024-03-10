export default function initModal() {
  const loginBtn = document.querySelector(".links li:last-child");
  const modalConteiner = document.querySelector(".modal-conteiner");
  const fecharModal = document.querySelector(".fechar");

  if (loginBtn && fecharModal && modalConteiner) {
    function toggleModal() {
      modalConteiner.classList.toggle("ativo");
    }

    function clickForaFecha(event) {
      if (event.target === this) {
        toggleModal();
      }
    }

    loginBtn.addEventListener("click", toggleModal);
    fecharModal.addEventListener("click", toggleModal);
    modalConteiner.addEventListener("click", clickForaFecha);
  }
}
