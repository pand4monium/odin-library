const myLibrary = [
    new Book("Understanding Analysis", "Stephen Abbott", 439, true), 
    new Book("Linear Algebra", "Hoffman and Kunz", 466, false), 
    new Book("Calculus", "Michael Spivak", 602, false)
];

function Book(name, author, numOfPages, read) {
    this.name = name;
    this.author = author;
    this.numOfPages = numOfPages;
    this.id = crypto.randomUUID();
    this.read = read;
}

function addBookToLibrary(name, author, numOfPages, read) {
    myLibrary.push(new Book(name, author, numOfPages, read));
    displayBooks();
}

function displayBooks() {
    const bookCardGrid = document.getElementById("book-card-grid");
    bookCardGrid.innerHTML = "";
    myLibrary.forEach((book, index) => {
        bookCardGrid.innerHTML += `
        <div class="book-card book-${book.read ? "not-read" : "read"}" id="book-card-${book.id}">
            <div class="book-card-title">${book.name}</div>
            <div class="book-card-author">${book.author}</div>
            <div class="book-card-pages">Pages: ${book.numOfPages}</div>
            <div class="book-card-buttons">
                <button class="book-${book.read ? "not-read" : "read"}-btn">${!book.read ? "Not Read" : "Read"}</button>
                <button class="book-card-delete-btn">Delete</button>
            </div>
        </div>
        `
    })

    const readBtns = [...document.querySelectorAll(".book-not-read-btn, .book-read-btn")];

    readBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            myLibrary[index].read = !myLibrary[index].read;
            displayBooks();
        })
    })

    const deleteBtns = [...document.querySelectorAll(".book-card-delete-btn")];

    deleteBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks();
        })
    })
}

displayBooks();

const name = document.getElementById("new-book-name");
const author = document.getElementById("new-book-author");
const pages = document.getElementById("new-book-pages");
const read = document.getElementById("new-book-read");

document.getElementById("new-book-btn").addEventListener("click", () => {
    document.getElementById("new-book").showModal();
})

document.getElementById("new-book-cancel-btn").addEventListener("click", () => {
    document.getElementById("new-book").close();
    name.value = ""; author.value = ""; pages.value = ""; read.checked = false;
})

document.getElementById("new-book-submit").addEventListener("click", (e) => {
    e.preventDefault();

    addBookToLibrary(name.value, author.value, pages.value, read.checked);
    document.getElementById("new-book").close();

    name.value = ""; author.value = ""; pages.value = ""; read.checked = false;
})
