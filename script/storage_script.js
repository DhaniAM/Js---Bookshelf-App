// return false if browser doesn't support localStorage
function checkLocalStorage() {
	return typeof (Storage) != 'undefined';
}

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

