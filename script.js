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
"arabic1.pdf",
"arabic3.pdf",
"english2.pdf",
"english3.pdf",
"islam1.pdf",
"islam3.pdf",
"history1.pdf",
"history3.pdf",
"geography1.pdf",
"geography3.pdf",
"computer2.pdf",
"computer3.pdf",
"adab-arabic3.pdf",
"grammar1.pdf",
"rhetoric1.pdf",
"rhetoric2.pdf",
"military1.pdf",
"family1.pdf",
"commercial2.pdf",
"engineering1.pdf",
"engineering3.pdf",
"second-math3.pdf",
"frist-math3.pdf"

];

const container = document.getElementById("container");

// عرض الكتب
function loadBooks(){

    container.innerHTML = "";

    books.sort().forEach(file => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${file.replace(".pdf","")}</h3>
            <button onclick="openBook('books/${file}')">
                فتح الكتاب
            </button>
        `;

        container.appendChild(card);

    });

}

// فتح الكتاب
function openBook(file){

    document.getElementById("viewer").style.display = "flex";
    document.getElementById("pdf").src = file;

}

// إغلاق
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

// تشغيل
loadBooks();
