const repo = "asmailsuliman8-code/Ismail-Suliman-Hassan-platform-";

let books = [];

async function loadBooks(){

    const url =
    `https://api.github.com/repos/${repo}/contents/books`;

    const res = await fetch(url);
    const files = await res.json();

    const container =
    document.getElementById("container");

    container.innerHTML = "";

    books = files
    .filter(f => f.name.endsWith(".pdf"))
    .sort((a,b)=>a.name.localeCompare(b.name));

    books.forEach(file => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${format(file.name)}</h3>
            <button onclick="openBook('${file.download_url}')">
                فتح الكتاب
            </button>
        `;

        container.appendChild(card);

    });

}

// تنسيق الاسم
function format(name){

    return name
    .replace(".pdf","")
    .replace(/[_-]/g," ")
    .replace("math","رياضيات")
    .replace("physics","فيزياء")
    .replace("chemistry","كيمياء")
    .replace("biology","أحياء")
    .replace("arabic","عربي")
    .replace("english","إنجليزي")
    .replace("islam","إسلامية")
    .replace("history","تاريخ")
    .replace("geography","جغرافيا")
    .replace("computer","حاسوب");

}

function openBook(file){

    document.getElementById("viewer").style.display = "flex";
    document.getElementById("pdf").src = file;

}

function closeBook(){

    document.getElementById("viewer").style.display = "none";
    document.getElementById("pdf").src = "";

}

// بحث
document.getElementById("search").addEventListener("input", function(){

    let v = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(c=>{

        c.style.display =
        c.innerText.toLowerCase().includes(v)
        ? "block":"none";

    });

});

loadBooks();
