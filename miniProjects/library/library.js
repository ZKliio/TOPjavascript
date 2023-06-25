let myLibrary = [];

function Book(title, author) {
  // the constructor...
    this.title = title
    this.author = author
    // this.bookid = Date.parse(new Date())
}

const bookOne = new Book("Pride and Prejudice", "Jane Austen");
const bookTwo = new Book("Call of the Wild", "Jack London");

myLibrary.push(bookOne);
myLibrary.push(bookTwo);

function addBookToLibrary(title, author) {
  // do stuff here
  let arg = new Book(title, author)
  myLibrary.push(arg)

}

let libraryList = document.querySelector(".libraryList");
const addBook = document.querySelector(".addBook")
render()

function render(){
    libraryList.innerHTML =""  

    for (item in myLibrary){
        let new_book = document.createElement("book")
        new_book.setAttribute("id", item)
        new_book.innerText = `${myLibrary[item].title}: ${myLibrary[item].author}`
        console.log(`${myLibrary[item].title}: ${myLibrary[item].author}`)

       
        libraryList.appendChild(new_book)
        new_book.appendChild(deleteButton(item))
    }

}

function deleteButton(item){
    let deletebutton = document.createElement("button")
    let delete_book = document.getElementById(item)


    deletebutton.innerText = "remove"
    deletebutton.addEventListener("click", (event) => {
        libraryList.removeChild(delete_book)
        myLibrary.splice(item, 1)
        
    }) 
    return deletebutton
}

addBook.addEventListener("click", () => {
    let titleInput = document.querySelector(".titleInput").value;
    let authorInput = document.querySelector(".authorInput").value;
    addBookToLibrary(titleInput, authorInput)
    render();
});


