document.addEventListener("DOMContentLoaded", () => {

  /* ================= ACORDEÓN ================= */
  document.querySelectorAll('.acordeon-header').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;

      document.querySelectorAll('.acordeon-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });

  /* ================= SCROLL REVEAL ================= */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ================= HEADER FIJO + SOMBRA ================= */
  const header = document.querySelector('.main-header');

  if (header) {
    function headerOnScroll() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', headerOnScroll);
    headerOnScroll();
  }

});

