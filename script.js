const repo = "asmailsuliman8-code/Ismail-Suliman-Hassan-platform-";

const container1 = document.getElementById("grade1");
const container2 = document.getElementById("grade2");
const container3 = document.getElementById("grade3");

let allBooks = [];

async function loadBooks(){

const url = `https://api.github.com/repos/${repo}/contents/`;

const res = await fetch(url);
const files = await res.json();

files.forEach(f=>{

if(f.name.endsWith(".pdf")){

allBooks.push(f.name);

let grade = detectGrade(f.name);

let card = document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${f.name.replace(".pdf","")}</h3>
<button onclick="openBook('${f.name}')">فتح</button>
`;

if(grade==1) container1.appendChild(card);
if(grade==2) container2.appendChild(card);
if(grade==3) container3.appendChild(card);

}

});

// عدد الكتب
document.getElementById("count").innerText =
"عدد الكتب: " + allBooks.length;

}

// تحديد الصف
function detectGrade(name){

if(name.includes("1")) return 1;
if(name.includes("2")) return 2;
if(name.includes("3")) return 3;

return 1;
}

function openBook(file){

document.getElementById("viewer").style.display="block";
document.getElementById("pdf").src=file;

}

function closeBook(){
document.getElementById("viewer").style.display="none";
document.getElementById("pdf").src="";
}

// بحث
document.getElementById("search").addEventListener("input",e=>{

let v = e.target.value.toLowerCase();

document.querySelectorAll(".card").forEach(c=>{
c.style.display =
c.innerText.toLowerCase().includes(v)
? "block":"none";
});

});

loadBooks();
