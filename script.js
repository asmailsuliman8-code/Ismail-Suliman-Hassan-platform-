const books = [
{file:"math1.pdf", grade:1},
{file:"physics1.pdf", grade:1},
{file:"chemistry1.pdf", grade:1},
{file:"biology1.pdf", grade:1},
{file:"arabic1.pdf", grade:1},
{file:"english2.pdf", grade:2},
{file:"math2.pdf", grade:2},
{file:"physics3.pdf", grade:3},
{file:"math3.pdf", grade:3},
{file:"islam3.pdf", grade:3},
{file:"history1.pdf", grade:1},
{file:"geography3.pdf", grade:3},
{file:"computer3.pdf", grade:3}
];

function render(){

let g1=document.getElementById("grade1");
let g2=document.getElementById("grade2");
let g3=document.getElementById("grade3");

g1.innerHTML=g2.innerHTML=g3.innerHTML="";

let count=0;

books.forEach(b=>{

count++;

let card=document.createElement("div");
card.className="card";
card.innerHTML=`
<h3>${b.file.replace(".pdf","")}</h3>
<button onclick="openBook('${b.file}')">فتح</button>
`;

if(b.grade==1) g1.appendChild(card);
if(b.grade==2) g2.appendChild(card);
if(b.grade==3) g3.appendChild(card);

});

// عدد الكتب
document.getElementById("count").innerText=
"عدد الكتب: "+count;

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

let v=e.target.value.toLowerCase();

document.querySelectorAll(".card").forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(v)
?"block":"none";
});

});

render();
