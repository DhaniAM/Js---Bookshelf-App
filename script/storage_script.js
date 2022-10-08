// return false if browser doesn't support localStorage
function checkLocalStorage() {
	return typeof (Storage) != 'undefined';
}

// Insert after saving form
function addToLocalStorage(bookData) {
	if(checkLocalStorage()) {
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
	} else {
		alert('Your browser does not support local storage ');
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

function addStorageAfterDelete() {
	let finishedBook = getLocalStorage(finishedBookKey);
	let unfinishedBook = getLocalStorage(unfinishedBookKey);

	selectedBookId.forEach((selectedBook) => {
		finishedBook.forEach((savedBook, idx) => {
			if (selectedBook == savedBook.id) {
				finishedBook.splice(idx, 1);
			}
		}) 
	})
	selectedBookId.forEach((selectedBook) => {
		unfinishedBook.forEach((savedBook, idx) => {
			if (selectedBook == savedBook.id) {
				unfinishedBook.splice(idx, 1);
			}
		}) 
	})

	localStorage.setItem(finishedBookKey, JSON.stringify(finishedBook));
	localStorage.setItem(unfinishedBookKey, JSON.stringify(unfinishedBook));
	updateBookList();
}

function addStorageAfterMove() {
	const finishedBook = getLocalStorage(finishedBookKey);
	const unfinishedBook = getLocalStorage(unfinishedBookKey);
	const books = document.querySelectorAll(".book");

	const bookList = [...finishedBook, ...unfinishedBook];
	
	let newFinishedId = [];
	let newUnfinishedId = [];

	let newFinishedData = [];
	let newUnfinishedData = [];

	books.forEach((book) => {
		const parent = book.parentNode;
		if(parent.classList.contains("book-list-unfinished")) {
			const data = book.classList[2];
			newUnfinishedId.push(parseInt(data));
		} else {
			const data = book.classList[2];
			newFinishedId.push(parseInt(data));
		}
	});

	const finishedLength = newFinishedId.length;
	const unfinishedLength = newUnfinishedId.length;
	const bookListLength = bookList.length;
	
	for(let i = 0; i < finishedLength; i++) {
		for(let x = 0; x < bookListLength; x++) {
			if(bookList[x].id == newFinishedId[i]) {
				let newBook = bookList[x];
				newBook.isFinished = true;
				newFinishedData.push(newBook);
			}
		}
	}
	for(let i = 0; i < unfinishedLength; i++) {
		for(let x = 0; x < bookListLength; x++) {
			if(bookList[x].id == newUnfinishedId[i]) {
				let newBook = bookList[x];
				newBook.isFinished = false;
				newUnfinishedData.push(newBook);
			}
		}
	}

	localStorage.setItem(unfinishedBookKey, JSON.stringify(newUnfinishedData));
	localStorage.setItem(finishedBookKey, JSON.stringify(newFinishedData));
}