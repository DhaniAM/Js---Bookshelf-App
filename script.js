// Middle section
const middleSection = document.querySelector(".middle-section");
const addBook = document.querySelector(".add-book");
const removeBook = document.querySelector(".remove-book");
const moveBook = document.querySelector(".move-book");

// add section
const addSection = document.querySelector(".add-section");
const addForm = document.querySelector(".add-form");
const isFinishedBtn = document.querySelector(".is-finished-btn");
const isFinishedCircle = document.querySelector(".is-finished-circle");
const isFinishedTxt = document.querySelector(".is-finished-txt");
const cancelBtn = document.querySelector(".cancel-btn");

// remove section
const removeSection = document.querySelector(".remove-section");
const saveRemoveBtn = document.querySelector(".save-btn-remove");

// move section
const moveSection = document.querySelector(".move-section");
const saveMoveBtn = document.querySelector(".save-btn-move");

// Middle Initial State Section
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


// Add book section

isFinishedBtn.addEventListener("click", () => {
	toggleIsFinishedState();
});

addForm.addEventListener("submit", () => {
	addSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
	addSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});

function checkLocalStorage() {

}
// Change is-finished button on and off in Add Book Menu
function toggleIsFinishedState() {
	let isFinishedState = false;
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
}

function getIsFinishedState() {
	if (isFinishedCircle.classList.contains("circle-true")) {
		return true
	} else {
		return false;
	}
}

// Remove book section
saveRemoveBtn.addEventListener("click", () => {
	removeSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});


// Move book section
saveMoveBtn.addEventListener("click", () => {
	moveSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});