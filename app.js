const myLibrary = []

function Book(name) {
    this.name = name
}
 function addBookToLibrary(name) {
    const book = new Book(name)
    myLibrary.push(book)
 }

addBookToLibrary("a")
addBookToLibrary("bb")

 cardContainer = document.querySelector(".card-container");

 function displayAllBooks() {
    for(index = 0; index < myLibrary.length; index ++) {
        const card = document.createElement("div")
        card.classList.add("card")
        card.textContent = myLibrary[index].name
        cardContainer.appendChild(card)
    }
 }

 displayAllBooks()

