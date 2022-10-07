// move section
const moveSection = document.querySelector(".move-section");
const saveMoveBtn = document.querySelector(".save-btn-move");

// Move book section
saveMoveBtn.addEventListener("click", () => {
	moveSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});