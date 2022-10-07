// Middle section
const middleSection = document.querySelector(".middle-section");
const addBook = document.querySelector(".add-book");
const removeBook = document.querySelector(".remove-book");
const moveBook = document.querySelector(".move-book");

const unfinishedBookKey = "UNFINISHED_BOOK";
const finishedBookKey = "FINISHED_BOOK";

// return false if browser doesn't support localStorage
function checkLocalStorage() {
	return typeof (Storage) != 'undefined';
}

document.addEventListener("DOMContentLoaded", () => {
	if (!checkLocalStorage()) {
		console.log("Browser does not support local storage");
	} else {
		console.log('running');
		if (getLocalStorage(unfinishedBookKey) !== null) {
			const unfinishedStorageData = getLocalStorage(unfinishedBookKey);
			for (const [index, item] of unfinishedStorageData.entries()) {
				const book = makeBook(item.title, item.author, item.year, index);
				displayBook(book, item.isFinished)
			}
		}
		if (getLocalStorage(finishedBookKey) !== null) {
			const finishedStorageData = getLocalStorage(finishedBookKey)
			for (const [index, item] of finishedStorageData.entries()) {
				const book = makeBook(item.title, item.author, item.year, index);
				displayBook(book, item.isFinished)
			}
			
		}
	}
});

// Middle Initial State Section=============================================
addBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	addSection.classList.remove("hidden");
	resetIsFinishedState();
});

removeBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	removeSection.classList.remove("hidden");
	displayTrashIcon();
});

moveBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	moveSection.classList.remove("hidden");
});

function makeBook(title, author, year, index) {
	const color = (index % 3) + 1;
	const book = document.createElement("div");
	book.classList.add("book");
	book.classList.add(`book-${color}`);

	const bookTitle = document.createElement("p");
	bookTitle.classList.add("book-title");
	bookTitle.textContent = title;

	const bookAuthor = document.createElement("p");
	bookAuthor.classList.add("book-author");
	bookAuthor.textContent = author;

	const bookYear = document.createElement("p");
	bookYear.classList.add("book-year");
	bookYear.textContent = year;

	const bookDiv = document.createElement("div");
	bookDiv.classList.add("right-txt");
	bookDiv.append(bookAuthor, bookYear);

	book.append(bookTitle, bookDiv);
	return book;
}

function displayBook(book, isFinished) {
	if (isFinished) {
		const finishedShelf = document.querySelector(".book-list-finished");
		finishedShelf.appendChild(book);
	} else {
		const unfinishedShelf = document.querySelector(".book-list-unfinished");
		unfinishedShelf.appendChild(book);
	}
}


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

// return type is array
function getLocalStorage(key) {
	if (localStorage.getItem(key) !== null) {
		const JsonData = localStorage.getItem(key);
		const parsedData = JSON.parse(JsonData);
		return parsedData;
	} else {
		return null;
	}
}

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



// remove section=====================================================
const removeSection = document.querySelector(".remove-section");
const saveRemoveBtn = document.querySelector(".save-btn-remove");

// Remove book section
saveRemoveBtn.addEventListener("click", () => {
	removeSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
	const deleteBtn = document.querySelectorAll(".delete-icon");
	deleteBtn.forEach((item) => {
		item.remove();
	})
});

function displayTrashIcon() {
	const books = document.querySelectorAll(".book-title");
	
	books.forEach((item) => {
		const iconElement = document.createElement("span");
		iconElement.classList.add("material-symbols-outlined");
		iconElement.classList.add("delete-icon");
		iconElement.textContent = "delete";
		insertAfter(iconElement, item);	
	});
}

function insertAfter(newNode, oldNode) {
	oldNode.parentNode.insertBefore(newNode, oldNode.nextSibling);
}


// move section=======================================================
const moveSection = document.querySelector(".move-section");
const saveMoveBtn = document.querySelector(".save-btn-move");

// Move book section
saveMoveBtn.addEventListener("click", () => {
	moveSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
});