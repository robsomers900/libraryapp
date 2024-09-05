const myLibrary = ["book1", "book2", "book3"]

function Book() {

}
 function addBookToLibrary() {

 }

 cardContainer = document.querySelector(".card-container");

 function displayAllBooks() {
    for(index = 0; index < myLibrary.length; index ++) {
        const card = document.createElement("div")
        card.classList.add("card")
        card.textContent = myLibrary[index]
        cardContainer.appendChild(card)
    }
 }

 displayAllBooks()

