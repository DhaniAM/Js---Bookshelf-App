const middleSection = document.querySelector(".middle-section");
const addBook = document.querySelector(".add-book");
const removeBook = document.querySelector(".remove-book");
const moveBook = document.querySelector(".move-book");

const addSection = document.querySelector(".add-section");
const isFinishedBtn = document.querySelector(".is-finished-btn");
const isFinishedCircle = document.querySelector(".is-finished-circle");
const isFinishedTxt = document.querySelector(".is-finished-txt");
const saveFormBtn = document.querySelector(".submit-btn");

const removeSection = document.querySelector(".remove-section");
const saveRemoveBtn = document.querySelector(".save-btn-remove");


const moveSection = document.querySelector(".move-section");
const saveMoveBtn = document.querySelector(".save-btn-move");



let isFinishedState = false;

// Change is-finished button on and off
isFinishedBtn.addEventListener("click", () => {
	if (isFinishedState) {
		isFinishedState = false;
		isFinishedCircle.classList.remove("circle-true");
		isFinishedCircle.classList.add("circle-false");
		isFinishedTxt.textContent = "I am not finished reading this book";
	} else {
		isFinishedState = true;
		isFinishedCircle.classList.remove("circle-false");
		isFinishedCircle.classList.add("circle-true");
		isFinishedTxt.textContent = "I am finished reading this book";
	}
});

addBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	addSection.classList.remove("hidden");
});

removeBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	removeSection.classList.remove("hidden");
});

moveBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	moveSection.classList.remove("hidden");
});


saveFormBtn.addEventListener("click", () => {
	addSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});

saveRemoveBtn.addEventListener("click", () => {
	removeSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});

saveMoveBtn.addEventListener("click", () => {
	moveSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});

