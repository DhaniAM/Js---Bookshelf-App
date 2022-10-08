
// add section ========================================================
const addSection = document.querySelector(".add-section");
const addForm = document.querySelector(".add-form");
const isFinishedBtn = document.querySelector(".is-finished-btn");
const isFinishedCircle = document.querySelector(".is-finished-circle");
const isFinishedTxt = document.querySelector(".is-finished-txt");
const cancelBtn = document.querySelector(".cancel-btn");

// Add book section
// toggle finished or not
let isFinishedState = false;

isFinishedBtn.addEventListener("click", () => {
	toggleIsFinishedState();
});

addForm.addEventListener("submit", () => {
	const bookId = Date.now();
	const bookTitle = document.querySelector("#title").value;
	const bookAuthor = document.querySelector("#author").value;
	const bookYear = document.querySelector("#year").value;
	const bookData = {
		id: bookId,
		title: bookTitle,
		author: bookAuthor,
		year: bookYear,
		isFinished: getIsFinishedState(),
	};
	addToLocalStorage(bookData);
	addSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});

// Cancel btn
cancelBtn.addEventListener("click", () => {
	addSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
	document.querySelector("#title").value = null;
	document.querySelector("#author").value = null;
	document.querySelector("#year").value = null;
	resetIsFinishedState();
});

// Change is-finished button on and off in Add Book Section
function toggleIsFinishedState() {
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

// reset finished button
function resetIsFinishedState() {
	isFinishedState = false;
	isFinishedCircle.classList.remove("circle-true");
	if (!isFinishedCircle.classList.contains("circle-false")) {
		isFinishedCircle.classList.add("circle-false");
	}
}
