function Book(name, author, pageNumber, ifWasRead){
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.ifWasRead = ifWasRead;
}
let myLibrary = [];

document.querySelector(".add-button").addEventListener("click", displayInputField);
document.querySelector(".remove-button").addEventListener("click", removeInputField);
// document.querySelector(".submit-button").addEventListener("click", addBookToLibrary);

function addBookToLibrary(e){
    //do stuff here
    getDataFromForm();
    document.querySelector(".book-container").textContent = "";
    for(let book in myLibrary){
        let newBook = document.createElement("div");
        newBook.className = "book";
        newBook.textContent = myLibrary[book].author + myLibrary[book].pageNumber + myLibrary[book].ifWasRead;  
        // let author = newBook.createElement("div");
        // let pageNumber = newBook.createElement("div");
        // let ifWasRead = newBook.createElement("div");
        document.querySelector(".book-container").appendChild(newBook);
        // document.querySelector(".book").appendChild("sdfsdg");
        // author.appendChild(myLibrary[book].author);
        // pageNumber.appendChild(myLibrary[book].pageNumber);
        // ifWasRead.appendChild(myLibrary[book].pageNumber);
        let name = document.createElement("div");
        document.querySelector(".book").appendChild(name);
        name.textContent = myLibrary[book].name;
        newBook.appendChild(name);
    }
    removeInputField();
}

function getDataFromForm(){
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let pageNumber = document.getElementById("pages").value;
    let ifWasRead = document.getElementById("ifWasRead").checked;
    const newBook = new Book(name, author, pageNumber, ifWasRead);
    myLibrary.push(newBook);
}

function displayInputField(e){
    document.getElementById("myForm").style.display = "block";
}

function removeInputField(e){
    document.getElementById("myForm").style.display = "none";
}