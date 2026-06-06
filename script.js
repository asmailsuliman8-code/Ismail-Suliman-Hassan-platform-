const search = document.getElementById("search");

search.addEventListener("keyup", function() {

    let filter = search.value.toLowerCase();

    let books = document.querySelectorAll(".book");

    books.forEach(book => {

        let text = book.textContent.toLowerCase();

        if(text.includes(filter)){
            book.style.display = "flex";
        } else {
            book.style.display = "none";
        }

    });

});
