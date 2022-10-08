
// remove section=====================================================
const removeSection = document.querySelector(".remove-section");
const saveRemoveBtn = document.querySelector(".save-btn-remove");

let selectedBookId = [];

// Remove book section
saveRemoveBtn.addEventListener("click", () => {
	removeSection.classList.add("hidden");
	middleSection.classList.remove("hidden");
	const deleteBtn = document.querySelectorAll(".delete-icon");
	deleteBtn.forEach((item) => {
		item.remove();
	})
	addStorageAfterDelete();
})

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

function grabTrashIcon() {
	const icon = document.querySelectorAll(".delete-icon");
	return icon;
}

function canHighlightBook() {
	const icons = grabTrashIcon();
	icons.forEach((icon) => {
		icon.addEventListener("click", () => {
			const book = icon.parentNode;
			const bookId = book.classList[2];
			book.classList.toggle("highlighted");
			// if trash icon already highlighted, remove from array
			if (selectedBookId.includes(bookId)) {
				const index = selectedBookId.indexOf(bookId);
				selectedBookId.splice(index, 1);
				console.log(selectedBookId);
			} else {
				selectedBookId.push(bookId);
				console.log(selectedBookId);
			}
		})
	})
}