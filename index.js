const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const addBtn = document.getElementById("addBtn");
const bookList = document.getElementById("book-list");

addBtn.addEventListener("click", function (even) {
    even.preventDefault();
    if (title.value == "" && year.value == "" && author.value == "") {
        alert("Please Input Valid Information !")
    }
    else {
        const newRow = document.createElement("tr");

        //Creating Title
        const newTitle = document.createElement("th");
        newRow.appendChild(newTitle);
        newTitle.innerHTML = title.value;

        //Creating Author
        const newAuthor = document.createElement("th");
        newRow.appendChild(newAuthor);
        newAuthor.innerHTML = author.value;

        //Creating Year
        const newYear = document.createElement("th");
        newRow.appendChild(newYear);
        newYear.innerHTML = year.value;

        bookList.appendChild(newRow);
    }

    // input clear when addbookList button Click
    title.value = "", year.value = "", author.value = "";
})