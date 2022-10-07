// Middle section
const middleSection = document.querySelector(".middle-section");
const addBook = document.querySelector(".add-book");
const removeBook = document.querySelector(".remove-book");
const moveBook = document.querySelector(".move-book");


// Middle Initial State Section
addBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	addSection.classList.remove("hidden");
	reseitIsFinishedState();
});

removeBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	removeSection.classList.remove("hidden");
});

moveBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	moveSection.classList.remove("hidden");
});
