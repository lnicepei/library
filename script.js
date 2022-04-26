function Book(name, author, pageNumber, ifWasRead){
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.ifWasRead = ifWasRead;
}
let myLibrary = [];

document.querySelector(".add-button").addEventListener("click", displayInputField);
document.querySelector(".remove-button").addEventListener("click", removeInputField);
document.querySelector("form").addEventListener("submit", addBookToLibrary);

function addBookToLibrary(e){
    e.preventDefault();
    pushDataFromForm();

    document.querySelector(".book-container").textContent = "";

    for (let book in myLibrary){
        let newBook = document.createElement("div");
        newBook.className = "book";

        let name = document.createElement("div");
        name.textContent = myLibrary[book].name;
        name.className = "name";

        let author = document.createElement("div");
        author.textContent = myLibrary[book].author;
        author.className = "author";

        let pageNumber = document.createElement("div");
        pageNumber.textContent = myLibrary[book].pageNumber;
        pageNumber.className = "pageNumber";

        let ifWasRead = document.createElement("div");
        ifWasRead.textContent = myLibrary[book].ifWasRead;
        ifWasRead.className = "ifWasRead";

        let removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.addEventListener("click", removeBook);

        document.querySelector(".book-container").appendChild(newBook);

        newBook.appendChild(name);
        newBook.appendChild(author);
        newBook.appendChild(pageNumber);
        newBook.appendChild(ifWasRead);
        newBook.appendChild(removeButton);
    }
    removeInputField();
}

function pushDataFromForm(){
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let pageNumber = document.getElementById("pages").value;
    let ifWasRead = document.getElementById("ifWasRead").checked;

    const newBook = new Book(name, author, pageNumber, ifWasRead);

    myLibrary.push(newBook);
}

function displayInputField(){
    document.getElementById("myForm").style.display = "block";
}

function removeInputField(){
    document.getElementById("myForm").style.display = "none";

    document.getElementById("bookname").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("ifWasRead").checked = "";
}

function removeBook(e){
    
}