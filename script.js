const heroEmail = document.querySelector(".hero-email-error");
const accessEmail = document.querySelector(".access-email-error");
const getStartedBtns = document.querySelectorAll(".get-started");
const heroInput = document.querySelector(".email");
const accessInput = document.querySelector(".access-email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

getStartedBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const heroValue = heroInput.value.trim();
    const accessValue = accessInput.value.trim();

    let hasError = false;

    if (!emailRegex.test(heroValue)) {
      heroEmail.style.display = "flex";
      hasError = true;
    } else {
      heroEmail.style.display = "flex";
    }
    if (!emailRegex.test(accessValue)) {
      accessEmail.style.display = "flex";
      hasError = true;
    } else {
      accessEmail.style.display = "flex";
    }
  });
});
