const darkModeBtn = document.querySelector("#darkModeToggle");
const lightModeIcon = document.querySelector(".light_mode");
const darkModeIcon = document.querySelector(".dark_mode");
const cardBody = document.querySelector(".card__body--light");
const cardProgress = document.querySelector(".card__progress--area-light");

darkModeBtn.addEventListener("click", () => {
  lightModeIcon.classList.toggle("hidden");
  darkModeIcon.classList.toggle("hidden");

  if (cardBody.classList.contains("card__body--light")) {
    cardBody.classList.remove("card__body--light");
    cardProgress.classList.remove("card__progress--area-light");
    cardBody.classList.add("card__body--dark");
    cardProgress.classList.add("card__progress--area-dark");
  } else {
    cardBody.classList.remove("card__body--dark");
    cardProgress.classList.remove("card__progress--area-dark");
    cardBody.classList.add("card__body--light");
    cardProgress.classList.add("card__progress--area-light");
  }
});
