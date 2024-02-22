//Navegação por Tab
function tabNav() {
  const animaisDesc = document.querySelectorAll(".descricao-animais section");
  const animaisFotos = document.querySelectorAll(".animais-lista li");

  if (animaisDesc.length && animaisFotos.length) {
    function pegartexto(index) {
      animaisDesc.forEach((desc) => {
        desc.classList.remove("ativo");
      });

      animaisDesc[index].classList.add("ativo");
    }

    animaisFotos.forEach((foto, index) => {
      foto.addEventListener("click", () => {
        pegartexto(index);
      });
    });
  }
}
tabNav();

//Acordeon List FAQ
function accordionActv() {
  const dtElements = document.querySelectorAll(".faq-lista dt");

  if (dtElements.length) {
    function actAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    dtElements.forEach((dt) => {
      dt.addEventListener("click", actAccordion);
    });
  }
}
accordionActv();

//Animação ao Scroll
function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowTamanho = window.innerHeight * 0.6;
  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const distanciaTop = section.getBoundingClientRect().top;
        if (distanciaTop < windowTamanho) {
          section.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();
