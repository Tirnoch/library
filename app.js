const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const addBookButton = document.getElementById('new-book-form');
addBookButton.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const newBookButton = document.getElementById('add-btn');
newBookButton.addEventListener('click', () => {
  const form = document.getElementById('new-book-form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

function render() {
  let libraryElement = document.querySelector('.library');
  libraryElement.innerText = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement('div');
    bookElement.className = 'cell';
    bookElement.innerHTML = `
    <div class='card-content'>
    <h3>title: ${book.title}</h3>
    <h4>author: ${book.author}</h4>
    <h4>pages: ${book.pages}</h4>
    <h4 class='read-status'> read: ${book.read ? 'read' : 'not read yet'}</h4>
    </div>
    <div class='card-buttons'>
    <button type="button" id="read-btn" onClick='toggleRead(${i})'>
        read
    </button>
        <button type="button" id="remove-btn" onClick='removeBook(${i})'>
        delete
    </button>
    </div>
    `;
    libraryElement.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
