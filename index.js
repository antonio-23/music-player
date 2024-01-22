const darkModeBtn = document.querySelector("#darkModeToggle");
const lightModeIcon = document.querySelector(".light_mode");
const darkModeIcon = document.querySelector(".dark_mode");
const cardBody = document.querySelector(".card__body--light");
const cardProgress = document.querySelector(".card__progress--area-light");
const favoriteBtn = document.querySelector(".favoriteBtn");
const favoriteOutline = document.querySelector(".favorite-outline");
const favorite = document.querySelector(".favorite");

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

favoriteBtn.addEventListener("click", () => {
  favorite.classList.toggle("hidden");
  favoriteOutline.classList.toggle("hidden");
});

favoriteOutline.addEventListener("click", () => {
  window.confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.7 },
  });
});
