const myLibrary = []

const dialog = document.querySelector("#book-modal")
const openButton = document.querySelector("#open-book-modal")
const closeButton = document.querySelector("#close-book-modal")

openButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", ()=> {
    dialog.close();
})

const confirmButton = document.querySelector(".submit-new-book")

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages)
    myLibrary.push(book)
 }

confirmButton.addEventListener("click", () => {
    const bookTitle = document.querySelector("#Title").value
    const bookAuthor = document.querySelector("#Author").value
    const bookPages = document.querySelector("#Pages").value
    dialog.close()
    console.log(bookTitle + bookAuthor + bookPages)
    document.querySelectorAll(".card").forEach(function(element) {
        element.remove()
    })
    addBookToLibrary(bookTitle, bookAuthor, bookPages)
    displayAllBooks()

})

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

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





 
