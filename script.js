const petals =
document.querySelector(".petals");

const icons = [
"🌸","🍃","🌿","💮"
];

for(let i=0;i<60;i++){

const span =
document.createElement("span");

span.innerHTML =
icons[
Math.floor(
Math.random()*icons.length
)
];

span.style.left =
Math.random()*100 + "%";

span.style.top =
Math.random()*-100 + "vh";

span.style.animationDuration =
5 + Math.random()*10 + "s";

span.style.animationDelay =
Math.random()*5 + "s";

petals.appendChild(span);

}

/* SCREEN */

const cakeScreen =
document.getElementById("cakeScreen");

const funnyScreen =
document.getElementById("funnyScreen");

const puzzleScreen =
document.getElementById("puzzleScreen");

const finalCakeScreen =
document.getElementById("finalCakeScreen");

const birthdayScreen =
document.getElementById("birthdayScreen");

/* ELEMENTS */

const cake =
document.getElementById("cake");

const finalCake =
document.getElementById("finalCake");

const solveBtn =
document.getElementById("solveBtn");

const skipBtn =
document.getElementById("skipBtn");

const monkeyPopup =
document.getElementById("monkeyPopup");

const completePuzzle =
document.getElementById("completePuzzle");

const bgMusic =
document.getElementById("bgMusic");

const dragKnife =
document.getElementById("dragKnife");

const dragKnifeFinal =
document.getElementById("dragKnifeFinal");

/* PUZZLE */

const puzzleGrid =
document.querySelector(".puzzleGrid");

const cols = 5;
const rows = 3;

const totalPieces =
cols * rows;

let piecesArray = [];

for(let i=0;i<totalPieces;i++){

piecesArray.push(i);

}

piecesArray.sort(
()=>Math.random()-0.5
);

function renderPuzzle(){

puzzleGrid.innerHTML = "";

piecesArray.forEach(
(pieceValue,index)=>{

const piece =
document.createElement("div");

piece.className =
"piece";

const pieceWidth = 68;
const pieceHeight = 68;

const x =
(pieceValue % cols)
* pieceWidth;

const y =
Math.floor(
pieceValue / cols
)
* pieceHeight;

piece.style.backgroundPosition =
`-${x}px -${y}px`;

piece.addEventListener(
"click",
()=>{

selectPiece(index,piece);

});

puzzleGrid.appendChild(piece);

});

}

let firstPiece = null;

function selectPiece(index,piece){

const allPieces =
document.querySelectorAll(".piece");

allPieces.forEach((p)=>{
p.classList.remove("selected");
});

if(firstPiece === null){

firstPiece = index;

piece.classList.add("selected");

}

else{

[
piecesArray[firstPiece],
piecesArray[index]

] = [

piecesArray[index],
piecesArray[firstPiece]

];

firstPiece = null;

renderPuzzle();

}

}

renderPuzzle();

/* SKIP */

skipBtn.addEventListener(
"click",
()=>{

monkeyPopup.style.display =
"flex";

setTimeout(()=>{

monkeyPopup.style.display =
"none";

},1500);

});

/* SOLVE */

solveBtn.addEventListener(
"click",
()=>{

funnyScreen.classList.remove(
"active"
);

puzzleScreen.classList.add(
"active"
);

});

/* COMPLETE */

completePuzzle.addEventListener(
"click",
()=>{

puzzleScreen.classList.remove(
"active"
);

finalCakeScreen.classList.add(
"active"
);

});

/* FIRST CAKE */

let draggingKnife = false;

dragKnife.addEventListener(
"touchstart",
()=>{

draggingKnife = true;

});

dragKnife.addEventListener(
"touchmove",
(e)=>{

if(!draggingKnife) return;

const touch =
e.touches[0];

dragKnife.style.left =
touch.clientX - 80 + "px";

dragKnife.style.top =
touch.clientY - 50 + "px";

const cakeRect =
cake.getBoundingClientRect();

if(

touch.clientX > cakeRect.left &&
touch.clientX < cakeRect.right &&

touch.clientY > cakeRect.top &&
touch.clientY < cakeRect.bottom

){

document
.querySelector(".cakeArea")
.classList.add("cakeCut");

setTimeout(()=>{

cakeScreen.classList.remove(
"active"
);

funnyScreen.classList.add(
"active"
);

},700);

}

});

dragKnife.addEventListener(
"touchend",
()=>{

draggingKnife = false;

});

/* FINAL CAKE */

let draggingKnife2 = false;

dragKnifeFinal.addEventListener(
"touchstart",
()=>{

draggingKnife2 = true;

});

dragKnifeFinal.addEventListener(
"touchmove",
(e)=>{

if(!draggingKnife2) return;

const touch =
e.touches[0];

dragKnifeFinal.style.left =
touch.clientX - 80 + "px";

dragKnifeFinal.style.top =
touch.clientY - 50 + "px";

const cakeRect =
finalCake.getBoundingClientRect();

if(

touch.clientX > cakeRect.left &&
touch.clientX < cakeRect.right &&

touch.clientY > cakeRect.top &&
touch.clientY < cakeRect.bottom

){

document
.querySelectorAll(".cakeArea")[1]
.classList.add("cakeCut");

setTimeout(()=>{

finalCakeScreen.classList.remove(
"active"
);

birthdayScreen.classList.add(
"active"
);

bgMusic.play();

},700);

}

});

dragKnifeFinal.addEventListener(
"touchend",
()=>{

draggingKnife2 = false;

});
