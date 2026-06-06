const repo = "asmailsuliman8-code/Ismail-Suliman-Hassan-platform-";

let booksList = [];

// تحميل الكتب من GitHub
async function loadBooks(){

    const url = `https://api.github.com/repos/${repo}/contents/books`;

    const res = await fetch(url);
    const files = await res.json();

    const container = document.getElementById("booksContainer");

    files.forEach(file => {

        if(file.name.endsWith(".pdf")){

            booksList.push(file);

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${cleanName(file.name)}</h3>
                <button onclick="openBook('${file.download_url}')">
                    📖 فتح الكتاب
                </button>
            `;

            container.appendChild(card);
        }
    });
}

// تنظيف اسم الملف
function cleanName(name){
    return name
    .replace(".pdf","")
    .replace(/[-_]/g," ")
    .replace("math","رياضيات")
    .replace("physics","فيزياء")
    .replace("chemistry","كيمياء")
    .replace("english","إنجليزي")
    .replace("computer","حاسوب")
    .replace("arabic","عربي")
    .replace("islam","إسلامية")
    .replace("history","تاريخ")
    .replace("geography","جغرافيا");
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

// البحث
document.addEventListener("input", function(e){
    if(e.target.id === "search"){
        let val = e.target.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {
            card.style.display =
            card.innerText.toLowerCase().includes(val)
            ? "block"
            : "none";
        });
    }
});

// scroll
function scrollDown(){
    document.getElementById("booksContainer").scrollIntoView({behavior:"smooth"});
}

// تشغيل
loadBooks();
