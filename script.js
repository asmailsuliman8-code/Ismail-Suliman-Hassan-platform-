const repo = "asmailsuliman8-code/Ismail-Suliman-Hassan-platform-";

let allBooks = [];

// تحميل الكتب تلقائياً من GitHub
async function loadBooks() {

    const url = `https://api.github.com/repos/${repo}/contents/books`;

    try {
        const res = await fetch(url);
        const files = await res.json();

        const container = document.getElementById("booksContainer");

        files.forEach(file => {

            if(file.name.endsWith(".pdf")){

                allBooks.push(file);

                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <h3>${formatName(file.name.replace(".pdf",""))}</h3>
                    <p>كتاب دراسي</p>
                    <button onclick="openBook('${file.download_url}')">
                        عرض الكتاب
                    </button>
                `;

                container.appendChild(card);
            }
        });

    } catch (err) {
        console.log("خطأ في تحميل الكتب", err);
    }
}

// تحويل اسم الملف إلى اسم مفهوم
function formatName(name){

    return name
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

// إغلاق الكتاب
function closeBook(){
    document.getElementById("viewer").style.display = "none";
    document.getElementById("pdfFrame").src = "";
}

// بحث
document.addEventListener("input", function(e){

    if(e.target.id === "search"){

        let value = e.target.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            card.style.display =
            card.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";
        });
    }
});

// تشغيل النظام
loadBooks();
