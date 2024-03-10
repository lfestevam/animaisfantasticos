export default function initAccordion() {
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
