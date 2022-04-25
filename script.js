function Book(name, author, ifread){
    this.name = name;
    this.author = author;
    this.ifread = ifread;
}
let myLibrary = [];

document.querySelector(".add-button").addEventListener("click", displayInputField);
document.querySelector(".remove-button").addEventListener("click", removeInputField);
document.querySelector(".submit-button").addEventListener("click", addBookToLibrary);

function addBookToLibrary(e){
    //do stuff here
    getDataFromForm();
    document.querySelector(".book-container").textContent = "";
    for(let book in myLibrary){
        let newBook = document.createElement("div");
        newBook.className = "book";
        document.querySelector(".book-container").appendChild(newBook);
        newBook.textContent += myLibrary[book].name + " " + myLibrary[book].author + " " + myLibrary[book].ifread;
    }
    removeInputField();
}

function getDataFromForm(){
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let ifread = document.getElementById("ifread").checked;
    const newBook = new Book(name, author, ifread);
    myLibrary.push(newBook);
}

function displayInputField(e){
    document.getElementById("myForm").style.display = "block";
}

function removeInputField(e){
    document.getElementById("myForm").style.display = "none";
}