export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-js-scroll='js-scroll']");
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
