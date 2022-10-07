// remove section
const removeSection = document.querySelector(".remove-section");
const saveRemoveBtn = document.querySelector(".save-btn-remove");

// Remove book section
saveRemoveBtn.addEventListener("click", () => {
	removeSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});
