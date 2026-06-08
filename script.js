const repo =
"asmailsuliman8-code/Ismail-Suliman-Hassan-platform-";

async function loadBooks(){

    const url =
    `https://api.github.com/repos/${repo}/contents`;

    const response = await fetch(url);

    const files = await response.json();

    const container =
    document.getElementById("booksContainer");

    files.forEach(file=>{

        if(file.name.endsWith(".pdf")){

            const card =
            document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${formatName(file.name)}</h3>

                <button
                onclick="openBook('${file.download_url}')">
                فتح الكتاب
                </button>
            `;

            container.appendChild(card);
        }

    });

}

function formatName(name){

    return name
    .replace(".pdf","")
    .replace(/-/g," ")
    .replace(/_/g," ");

}

function openBook(url){

    document.getElementById("viewer")
    .style.display = "flex";

    document.getElementById("pdfFrame")
    .src = url;

}

function closeBook(){

    document.getElementById("viewer")
    .style.display = "none";

    document.getElementById("pdfFrame")
    .src = "";

}

document
.getElementById("search")
.addEventListener("keyup",function(){

    const value =
    this.value.toLowerCase();

    document
    .querySelectorAll(".card")
    .forEach(card=>{

        card.style.display =
        card.innerText.toLowerCase()
        .includes(value)
        ? "block"
        : "none";

    });

});

function scrollToBooks(){

    document
    .getElementById("booksContainer")
    .scrollIntoView({
        behavior:"smooth"
    });

}

loadBooks();
