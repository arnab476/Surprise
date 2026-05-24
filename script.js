/* PETALS */

const petals =
document.querySelector(
".petals"
);

const icons = [
"🌸",
"🍃",
"🌿",
"💮"
];

for(let i=0;i<50;i++){

const span =
document.createElement(
"span"
);

span.innerHTML =
icons[
Math.floor(
Math.random()*icons.length
)
];

span.style.left =
Math.random()*100 + "%";

span.style.animationDuration =
5 + Math.random()*10 + "s";

span.style.animationDelay =
Math.random()*5 + "s";

petals.appendChild(span);

}

/* SCREENS */

const cakeScreen =
document.getElementById(
"cakeScreen"
);

const funnyScreen =
document.getElementById(
"funnyScreen"
);

const puzzleScreen =
document.getElementById(
"puzzleScreen"
);

const finalCakeScreen =
document.getElementById(
"finalCakeScreen"
);

const birthdayScreen =
document.getElementById(
"birthdayScreen"
);

/* ELEMENTS */

const cake =
document.getElementById(
"cake"
);

const finalCake =
document.getElementById(
"finalCake"
);

const solveBtn =
document.getElementById(
"solveBtn"
);

const skipBtn =
document.getElementById(
"skipBtn"
);

const monkeyPopup =
document.getElementById(
"monkeyPopup"
);

const completePuzzle =
document.getElementById(
"completePuzzle"
);

const bgMusic =
document.getElementById(
"bgMusic"
);

const dragKnife =
document.getElementById(
"dragKnife"
);

const dragKnifeFinal =
document.getElementById(
"dragKnifeFinal"
);

/* PUZZLE */

const puzzleGrid =
document.querySelector(
".puzzleGrid"
);

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
document.createElement(
"div"
);

piece.className =
"piece";

piece.draggable = true;

piece.dataset.index =
index;

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

puzzleGrid.appendChild(
piece
);

});

addPuzzleEvents();

}

let draggedPiece = null;

function addPuzzleEvents(){

const pieces =
document.querySelectorAll(
".piece"
);

pieces.forEach((piece)=>{

piece.addEventListener(
"dragstart",
()=>{

draggedPiece =
piece;

});

piece.addEventListener(
"dragover",
(e)=>{

e.preventDefault();

});

piece.addEventListener(
"drop",
()=>{

if(
draggedPiece !== piece
){

const from =
draggedPiece.dataset.index;

const to =
piece.dataset.index;

[
piecesArray[from],
piecesArray[to]

] = [

piecesArray[to],
piecesArray[from]

];

renderPuzzle();

checkPuzzle();

}

});

});

}

function checkPuzzle(){

let solved = true;

for(
let i=0;
i<totalPieces;
i++
){

if(
piecesArray[i] !== i
){

solved = false;

break;

}

}

if(solved){

completePuzzle.style.opacity =
"1";

completePuzzle.style.pointerEvents =
"auto";

completePuzzle.innerHTML =
"Puzzle Solved 😭🔥";

}

}

renderPuzzle();

/* STARS */

function createStars(){

const blast =
document.createElement(
"div"
);

blast.className =
"starBlast";

for(let i=0;i<25;i++){

const star =
document.createElement(
"div"
);

star.className =
"star";

star.innerHTML =
"✨";

star.style.left =
Math.random()*100 + "%";

star.style.top =
Math.random()*100 + "%";

blast.appendChild(star);

}

document.body.appendChild(
blast
);

setTimeout(()=>{

blast.remove();

},1000);

}

/* FIRST CAKE */

let knifeDragging = false;

dragKnife.addEventListener(
"touchstart",
()=>{

knifeDragging = true;

});

dragKnife.addEventListener(
"touchmove",
(e)=>{

if(knifeDragging){

const touch =
e.touches[0];

dragKnife.style.left =
touch.clientX - 120 + "px";

dragKnife.style.top =
touch.clientY - 80 + "px";

const cakeRect =
cake.getBoundingClientRect();

if(

touch.clientX >
cakeRect.left

&&

touch.clientX <
cakeRect.right

){

document
.querySelector(
".cakeArea"
)
.classList.add(
"cakeCut"
);

createStars();

setTimeout(()=>{

cakeScreen
.classList.remove(
"active"
);

funnyScreen
.classList.add(
"active"
);

},700);

}

}

});

/* SKIP */

skipBtn.addEventListener(
"mouseover",
()=>{

monkeyPopup.style.display =
"flex";

setTimeout(()=>{

monkeyPopup.style.display =
"none";

},1200);

});

/* SOLVE */

solveBtn.addEventListener(
"click",
()=>{

funnyScreen
.classList.remove(
"active"
);

puzzleScreen
.classList.add(
"active"
);

});

/* COMPLETE */

completePuzzle.addEventListener(
"click",
()=>{

puzzleScreen
.classList.remove(
"active"
);

finalCakeScreen
.classList.add(
"active"
);

});

/* FINAL CAKE */

let knifeDragging2 = false;

dragKnifeFinal.addEventListener(
"touchstart",
()=>{

knifeDragging2 = true;

});

dragKnifeFinal.addEventListener(
"touchmove",
(e)=>{

if(knifeDragging2){

const touch =
e.touches[0];

dragKnifeFinal.style.left =
touch.clientX - 120 + "px";

dragKnifeFinal.style.top =
touch.clientY - 80 + "px";

const cakeRect =
finalCake.getBoundingClientRect();

if(

touch.clientX >
cakeRect.left

&&

touch.clientX <
cakeRect.right

){

document
.querySelectorAll(
".cakeArea"
)[1]
.classList.add(
"cakeCut"
);

createStars();

setTimeout(()=>{

finalCakeScreen
.classList.remove(
"active"
);

birthdayScreen
.classList.add(
"active"
);

bgMusic.play();

},700);

}

}

});
