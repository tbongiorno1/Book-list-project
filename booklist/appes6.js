class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
  // create element
    const row = document.createElement('tr');
  // insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `;
    list.appendChild(row);
  };

  showAlert(message, className) {
      // create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout
    setTimeout(function(){
      document.querySelector('.alert').remove();  
    }, 3000);
  };

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  };

  clearFields() {
    title.value = '';
    author.value = '';
    isbn.value = ''; 
  }
}

// event listener for add
document.getElementById('book-form').addEventListener('submit', function(e){
  // get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
   const book = new Book(title, author, isbn)
  // instantiate UI
  const ui = new UI();
  // validate
  if (title === '' || author === '' || isbn === ' ') {
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
  // add book to list
  ui.addBookToList(book);
  // Show sucess
  ui.showAlert('Book Added', 'success');
  // clear fields
  ui.clearFields();
  }
  e.preventDefault();
});
// event listener for add
document.getElementById('book-list').addEventListener('click', function(e){
 // instantiate UI
 const ui = new UI();
 //delet book 
 ui.deleteBook(e.target)
 //show message
 ui.showAlert('book removed!', 'success')
 // prevent default
 e.preventDefault();
});