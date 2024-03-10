export default function initTabNav() {
  const animaisDesc = document.querySelectorAll(".descricao-animais section");
  const animaisFotos = document.querySelectorAll(".animais-lista li");

  if (animaisDesc.length && animaisFotos.length) {
    function pegartexto(index) {
      animaisDesc.forEach((desc) => {
        desc.classList.remove("show-down");
        desc.classList.remove("show-rigth");
      });
      if (animaisDesc[index].getAttribute("data-anima") === "show-down") {
        animaisDesc[index].classList.add("show-down");
      } else {
        animaisDesc[index].classList.add("show-rigth");
      }
    }

    animaisFotos.forEach((foto, index) => {
      foto.addEventListener("click", () => {
        pegartexto(index);
      });
    });
  }
}
