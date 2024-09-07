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
    document.querySelector("#Title").value = ""
    document.querySelector("#Author").value = ""
    document.querySelector("#Pages").value = ""
})

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = "Read"
}

 cardContainer = document.querySelector(".card-container");

 function displayAllBooks() {
    cardContainer.innerHTML = ""
    myLibrary.forEach((book, index) => {
        const card = document.createElement("div")
        card.classList.add("card")
        let text = 'Title: ' + book.title + '<br>' + 'Author: ' + book.author + '<br>' + 'Pages: ' + book.pages +'<br>' + book.status + '<br>'
        card.innerHTML = text
        const removeCard = document.createElement("button")
        card.appendChild(removeCard)
        removeCard.innerHTML = "Delete"
        removeCard.addEventListener("click", () => {
            card.remove()
            myLibrary.splice(index, 1)
        })
        cardContainer.appendChild(card)
        const statusButton = document.createElement("button")
        card.appendChild(statusButton)
        statusButton.innerHTML = book.status === "Read" ? "Not Read":"Read"
        statusButton.addEventListener("click", () => {
            myLibrary[index].status = book.status === "Read" ? "Not Read": "Read"
            displayAllBooks()
        })
    })

 }





 
