const myLibrary = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}
 function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages)
    myLibrary.push(book)
 }

addBookToLibrary("hp", "jk", 69)

 cardContainer = document.querySelector(".card-container");

 function displayAllBooks() {
    for(index = 0; index < myLibrary.length; index ++) {
        const card = document.createElement("div")
        card.classList.add("card")
        let text = 'Title: ' + myLibrary[index].title + '<br>' + 'Author: ' + myLibrary[index].author + '<br>' + 'Pages: ' + myLibrary[index].pages
        card.innerHTML = text
        cardContainer.appendChild(card)
    }
 }

 displayAllBooks()

