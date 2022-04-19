let myLibrary = [];

function Book(name, author){

    //the constructor
    this.name = name;
    this.author = author;
}

document.querySelector(".add-button").addEventListener("click", displayInputField)
document.querySelector(".remove-button").addEventListener("click", removeInputField)
function addBookToLibrary(e){

    displayInputField();
    //do stuff here
    const newBook = new Book("name", "author");
    myLibrary.push(newBook);
    for(let book in myLibrary){
        document.querySelector(".book-container").textContent += book;
    }
}

function displayInputField(e){
    // if (document.querySelector(".input-field").style.display !== "none") {
    //     document.querySelector(".input-field").style.display = "none";
    // } else {
    //     document.querySelector(".input-field").style.display = "block";
    // }
    document.querySelector(".input-field").style.display = "flex" 
}
function removeInputField(e){
    if(document.querySelector(".input-field").style.display != "none")
    document.querySelector(".input-field").style.display = "none" 
}