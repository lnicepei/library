function Book(name, author, pageNumber, ifWasRead){
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.ifWasRead = ifWasRead;
}

let myLibrary = [];

document.querySelector(".add-button").addEventListener("click", displayInputField);
// document.querySelector(".remove-button").addEventListener("click", removeInputField);
document.querySelector("form").addEventListener("submit", addBookToLibrary);

function addBookToLibrary(e){
    e.preventDefault();
    pushDataFromForm();
    
    updateBooks();
    
    removeInputField();
    console.log(myLibrary);
    document.querySelector(".add-button").classList.toggle("rotate");
}

function updateBooks(){
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
        myLibrary[book].ifWasRead == true ? ifWasRead.textContent = "Read" : ifWasRead.textContent = "Unread"; 
        ifWasRead.className = "ifWasRead";
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        
        removeButton.addEventListener("click", () => {
            if (book > -1) {
                myLibrary.splice(book, 1);
            }

            updateBooks();
        });

        let readButton = document.createElement("button");
        
        if(myLibrary[book].ifWasRead == false){
            readButton.textContent = "Unread";
            readButton.style.background = "red"
        }else{
            readButton.textContent = "Read";
            readButton.style.background = "yellow"
        }
        
        readButton.addEventListener("click", () => {
            if(readButton.textContent == "Unread"){
                readButton.textContent = "Read";
                readButton.style.background = "yellow";
            }else{
                readButton.textContent = "Unread";
                readButton.style.background = "red";
            }
        })

        document.querySelector(".book-container").appendChild(newBook);
        
        newBook.appendChild(name);
        newBook.appendChild(author);
        newBook.appendChild(pageNumber);
        newBook.appendChild(removeButton);
        newBook.appendChild(readButton);
    }
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
    document.querySelector(".add-button").classList.toggle("rotate");
    document.getElementById("myForm").style.display == "" ? document.getElementById("myForm").style.display = "block" : removeInputField();
}

function removeInputField(){
    document.getElementById("myForm").style.display = "";
    document.getElementById("bookname").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("ifWasRead").checked = "";
}