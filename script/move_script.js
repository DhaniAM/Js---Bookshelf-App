// move section=======================================================
const moveSection = document.querySelector(".move-section");
const saveMoveBtn = document.querySelector(".save-btn-move");
const finishedList = document.querySelector(".book-list-finished");
const unfinishedList = document.querySelector(".book-list-unfinished");

// Move book section
saveMoveBtn.addEventListener("click", () => {
	moveSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
	removeMoveIcon();
	addStorageAfterMove();
});

function displayMoveIcon() {
	const books = document.querySelectorAll(".book-title");
	
	books.forEach((item) => {
		const iconElement = document.createElement("span");
		iconElement.classList.add("material-symbols-outlined");
		iconElement.classList.add("move-icon");
		iconElement.textContent = "swap_horizontal_circle";
		insertAfter(iconElement, item);	

	});
}

function removeMoveIcon() {
	const icons = document.querySelectorAll(".move-icon");
	icons.forEach((icon) => {
		icon.remove();
	})
}

function canMoveBook() {
	const moveIcon = document.querySelectorAll(".move-icon");
	const finishedBook = getLocalStorage(finishedBookKey);
	const unfinishedBook = getLocalStorage(unfinishedBookKey);

	let finishedId = finishedBook.map((item) => item.id);
	let unfinishedId = unfinishedBook.map((item) => item.id);

	moveIcon.forEach((icon) => {
		icon.addEventListener(("click"), () => {
			let book = icon.parentNode;
			let bookId = book.classList[2];
			let bookIdInt = parseInt(bookId);
			// if book in finished shelf
			if(finishedId.includes(bookIdInt)) {
				unfinishedList.appendChild(book);
				let index = finishedId.indexOf(bookIdInt);
				// remove from finishedId list
				finishedId.splice(index, 1);
				// add to unfinishedId list
				unfinishedId.push(bookIdInt);
			} else if(unfinishedId.includes(bookIdInt)){
				finishedList.appendChild(book);
				let index = unfinishedId.indexOf(bookIdInt);
				// remove from unfinishedId list
				unfinishedId.splice(index, 1);
				// add to finishedId list
				finishedId.push(bookIdInt);
			}
		})
	});
}