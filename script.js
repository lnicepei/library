class Book {
  constructor(name, author, pageNumber, ifWasRead) {
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.ifWasRead = ifWasRead;
  }
}

let myLibrary = [];

(function autoBooks() {
  let Shakespeare = new Book(
    "Book: Romeo and Juliet",
    "By William Shakespeare",
    "Pages: 300",
    true
  );
  let Tolstoy = new Book(
    "Book: War and Peace",
    "By Lev Tolstoy",
    "Pages: 1225",
    false
  );
  document
    .querySelector(".add-button")
    .addEventListener("click", displayInputField);
  document.querySelector("form").addEventListener("submit", addBookToLibrary);
  myLibrary.push(Shakespeare);
  myLibrary.push(Tolstoy);
  updateBooks();
})();

function addBookToLibrary(e) {
  e.preventDefault();
  pushDataFromForm();

  updateBooks();

  removeInputField();
}

function updateBooks() {
  document.querySelector(".book-container").textContent = "";

  for (let book in myLibrary) {
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
    myLibrary[book].ifWasRead == true
      ? (ifWasRead.textContent = "Read")
      : (ifWasRead.textContent = "Unread");
    ifWasRead.className = "ifWasRead";

    let removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.className = "remove-button";

    removeButton.addEventListener("click", () => {
      if (book > -1) {
        myLibrary.splice(book, 1);
      }

      updateBooks();
    });

    let readButton = document.createElement("button");
    readButton.className = "read-button";

    if (myLibrary[book].ifWasRead == false) {
      readButton.textContent = "Not read";
      readButton.style.boxShadow = "5px 5px 5px red";
      readButton.style.background = "red";
    } else {
      readButton.textContent = "Read";
      readButton.style.boxShadow = "5px 5px 5px #9ACD32";
      readButton.style.background = "#9ACD32";
    }

    readButton.addEventListener("click", () => {
      console.log(myLibrary[book].ifWasRead);
      if (myLibrary[book].ifWasRead == false) {
        readButton.textContent = "Read";
        readButton.style.background = "#9ACD32";
        readButton.style.boxShadow = "5px 5px 5px #9ACD32";
        myLibrary[book].ifWasRead = true;
      } else {
        readButton.textContent = "Not read";
        myLibrary[book].ifWasRead = false;
        readButton.style.background = "red";
        readButton.style.boxShadow = "5px 5px 5px red";
      }
    });
    document.querySelector(".book-container").appendChild(newBook);

    newBook.appendChild(name);
    newBook.appendChild(author);
    newBook.appendChild(pageNumber);
    newBook.appendChild(readButton);
    newBook.appendChild(removeButton);
  }
}

function pushDataFromForm() {
  let name = "Book: " + document.getElementById("bookname").value;
  let author = "By " + document.getElementById("author").value;
  let pageNumber = "Pages: " + document.getElementById("pages").value;
  let ifWasRead = document.getElementById("ifWasRead").checked;

  //   const formName = document.getElementById("bookname");

  //   formName.addEventListener("input", () => {
  //     formName.setCustomValidity("");
  //     formName.checkValidity();
  //   });

  //   formName.addEventListener("invalid", () => {
  //     if (formName.value === "") {
  //       formName.setCustomValidity("Enter your username!");
  //     } else {
  //       formName.setCustomValidity(
  //         "Usernames can only contain upper and lowercase letters. Try again!"
  //       );
  //     }
  //   });

  //   const formAuthor = document.getElementById("author");

  //   formAuthor.addEventListener("input", () => {
  //     formAuthor.setCustomValidity("");
  //     formAuthor.checkValidity();
  //   });

  //   formAuthor.addEventListener("invalid", () => {
  //     if (formAuthor.value === "") {
  //       formAuthor.setCustomValidity("Enter your username!");
  //     } else {
  //       formAuthor.setCustomValidity(
  //         "Usernames can only contain upper and lowercase letters. Try again!"
  //       );
  //     }
  //   });

  //   const formPages = document.getElementById("pages");

  //   formPages.addEventListener("input", () => {
  //     formPages.setCustomValidity("");
  //     formPages.checkValidity();
  //   });

  //   formPages.addEventListener("invalid", () => {
  //     if (formPages.value === "") {
  //       formPages.setCustomValidity("Enter your username!");
  //     } else {
  //       formPages.setCustomValidity(
  //         "Usernames can only contain upper and lowercase letters. Try again!"
  //       );
  //     }
  //   });

  const nameInput = document.querySelector("input");

  nameInput.addEventListener("input", () => {
    nameInput.setCustomValidity("");
    nameInput.checkValidity();
  });

  nameInput.addEventListener("invalid", () => {
    if (nameInput.value === "") {
      nameInput.setCustomValidity("Enter your username!");
    } else {
      nameInput.setCustomValidity(
        "Usernames can only contain upper and lowercase letters. Try again!"
      );
    }
  });

  const newBook = new Book(name, author, pageNumber, ifWasRead);

  myLibrary.push(newBook);
}

function displayInputField() {
  document.querySelector(".add-button").classList.toggle("rotate");
  document.getElementById("myForm").style.transform = "scale(1)";
  document
    .querySelector(".add-button")
    .removeEventListener("click", displayInputField);
  document
    .querySelector(".add-button")
    .addEventListener("click", removeInputField);
}

function removeInputField() {
  document
    .querySelector(".add-button")
    .addEventListener("click", displayInputField);
  document
    .querySelector(".add-button")
    .removeEventListener("click", removeInputField);

  document.querySelector(".add-button").classList.toggle("rotate");
  document.getElementById("myForm").style.transform = "scale(0)";
  document.getElementById("bookname").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("ifWasRead").checked = "";
}
