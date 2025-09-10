
function Book(name, author, numOfPages, read) {
    this.name = name;
    this.author = author;
    this.numOfPages = numOfPages;
    this.id = crypto.randomUUID();
    this.read = read;
}

function addBookToLibrary(name, author, numOfPages, read) {
    myLibrary.push(new Book(name, author, numOfPages, read));
}

function displayBooks() {
    const bookCardGrid = document.getElementById("book-card-grid")
    myLibrary.forEach(book => {
        bookCardGrid.innerHTML += `
        <div class="book-card" id="book-card-${book.id}">
            <div class="book-card-title">${book.name}</div>
            <div class="book-card-author">${book.author}</div>
            <div class="book-card-pages">Pages: ${book.numOfPages}</div>
            <div class="book-card-buttons">
                <button class="book-class-${this.read ? "not-read" : "read"}-btn">${this.read ? "Not Read" : "Read"}</button>
                <button class="book-card-delete-btn">Delete</button>
            </div>
        </div>
        `
    })
}

const myLibrary = [
    new Book("a", "A", 1), 
    new Book("b", "B", 2), 
    new Book("c", "C", 3)
];

displayBooks();

console.log(myLibrary)
