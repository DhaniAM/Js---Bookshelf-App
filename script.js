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
	reseitIsFinishedState();
});

// return false if browser doesn't support localStorage
function checkLocalStorage() {
	return typeof (Storage) != 'undefined';
}

const unfinishedBookKey = "UNFINISHED_BOOK";
const finishedBookKey = "FINISHED_BOOK";

// Insert data to localStorage
function addToLocalStorage(bookData) {
	// get local storage first
	let unfinishedBookList = [];
	let finishedBookList = [];
	if (getLocalStorage(unfinishedBookKey) !== null) {
		unfinishedBookList = getLocalStorage(unfinishedBookKey);
	}
	if (getLocalStorage(finishedBookKey) !== null) {
		finishedBookList = getLocalStorage(finishedBookKey);
	}

	// insert to list and save to storage
	if (getIsFinishedState()) {
		finishedBookList.push(bookData);
		const finishedBookJson = JSON.stringify(finishedBookList);
		localStorage.setItem(finishedBookKey, finishedBookJson);
	} else {
		unfinishedBookList.push(bookData);
		const unfinishedBookJson = JSON.stringify(unfinishedBookList);
		localStorage.setItem(unfinishedBookKey, unfinishedBookJson);
	}
}

// storage value is array
function getLocalStorage(key) {
	if (localStorage.getItem(key) !== null) {
		const JsonData = localStorage.getItem(key);
		const parsedData = JSON.parse(JsonData);
		return parsedData;
	} else {
		return null;
	}
}

// Change is-finished button on and off in Add Book Menu
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
function reseitIsFinishedState() {
	isFinishedState = false;
	isFinishedCircle.classList.remove("circle-true");
	if (!isFinishedCircle.classList.contains("circle-false")) {
		isFinishedCircle.classList.add("circle-false");
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