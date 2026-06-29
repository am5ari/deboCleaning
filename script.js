function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);