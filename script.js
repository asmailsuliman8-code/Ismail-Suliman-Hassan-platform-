const books = [
"math1.pdf",
"math2.pdf",
"math3.pdf",
"physics1.pdf",
"physics3.pdf",
"chemistry1.pdf",
"chemistry2.pdf",
"chemistry3.pdf",
"biology1.pdf",
"biology2.pdf",
"english2.pdf",
"english3.pdf",
"computer2.pdf",
"computer3.pdf",
"arabic1.pdf",
"arabic3.pdf",
"islam1.pdf",
"islam3.pdf",
"history1.pdf",
"history3.pdf",
"geography1.pdf",
"geography3.pdf"
];

const container = document.getElementById("booksContainer");

// عرض الكتب
function loadBooks(){

    books.forEach(file => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${file.replace(".pdf","")}</h3>
            <button onclick="openBook('${file}')">
                فتح الكتاب
            </button>
        `;

        container.appendChild(card);

    });

}

// فتح الكتاب
function openBook(file){

    document.getElementById("viewer").style.display = "flex";

    document.getElementById("pdfFrame").src = file;

}

// إغلاق
function closeBook(){

    document.getElementById("viewer").style.display = "none";

    document.getElementById("pdfFrame").src = "";

}

// بحث
document.getElementById("search").addEventListener("input", function(){

    let value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        card.style.display =
        card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";

    });

});

// تشغيل
loadBooks();
