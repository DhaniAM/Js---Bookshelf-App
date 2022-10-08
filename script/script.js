// Middle section
const middleSection = document.querySelector(".middle-section");
const addBook = document.querySelector(".add-book");
const removeBook = document.querySelector(".remove-book");
const moveBook = document.querySelector(".move-book");

const unfinishedBookKey = "UNFINISHED_BOOK";
const finishedBookKey = "FINISHED_BOOK";

// Load storage on page load
document.addEventListener("DOMContentLoaded", () => {
	if (!checkLocalStorage()) {
		alert("Your browser does not support local storage");
	} else {
		console.log('running');
		if (getLocalStorage(unfinishedBookKey) !== null) {
			const unfinishedStorageData = getLocalStorage(unfinishedBookKey);
			for (const [index, item] of unfinishedStorageData.entries()) {
				const book = makeBook(item.id, item.title, item.author, item.year, index);
				displayBook(book, item.isFinished)	
			}
		}
		if (getLocalStorage(finishedBookKey) !== null) {
			const finishedStorageData = getLocalStorage(finishedBookKey)
			for (const [index, item] of finishedStorageData.entries()) {
				let book = makeBook(item.id, item.title, item.author, item.year, index);
				displayBook(book, item.isFinished)
			}
			
		}
	}
});

addBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	addSection.classList.remove("hidden");
	resetIsFinishedState();
});

removeBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	removeSection.classList.remove("hidden");
	displayTrashIcon();
	canHighlightBook();
});

moveBook.addEventListener("click", () => {
	middleSection.classList.add("hidden");
	moveSection.classList.remove("hidden");
	displayMoveIcon();
	canMoveBook();

});

function makeBook(id, title, author, year, index) {
	const color = (index % 3) + 1;
	const book = document.createElement("div");
	book.classList.add("book");
	book.classList.add(`book-${color}`);
	book.classList.add(id);

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

