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

/* PUZZLE */

const puzzleGrid =
document.querySelector(
".puzzleGrid"
);

const correctOrder = [

0,1,2,3,4,
5,6,7,8,9

];

let currentOrder = [

3,1,7,0,5,
8,2,9,4,6

];

function createPuzzle(){

puzzleGrid.innerHTML = "";

currentOrder.forEach((num,index)=>{

const piece =
document.createElement("div");

piece.className =
"piece";

piece.draggable = true;

piece.dataset.index =
index;

piece.dataset.value =
num;

const x =
(num % 5) * 65;

const y =
Math.floor(num / 5) * 65;

piece.style.backgroundPosition =
`-${x}px -${y}px`;

puzzleGrid.appendChild(piece);

});

addDragEvents();

}

let dragItem = null;

function addDragEvents(){

const pieces =
document.querySelectorAll(
".piece"
);

pieces.forEach((piece)=>{

piece.addEventListener(
"dragstart",
()=>{

dragItem = piece;

});

piece.addEventListener(
"dragover",
(e)=>{

e.preventDefault();

});

piece.addEventListener(
"drop",
()=>{

if(dragItem !== piece){

const from =
dragItem.dataset.index;

const to =
piece.dataset.index;

[
currentOrder[from],
currentOrder[to]

] = [

currentOrder[to],
currentOrder[from]

];

createPuzzle();

checkPuzzle();

}

});

});

}

function checkPuzzle(){

if(
JSON.stringify(currentOrder)
===

JSON.stringify(correctOrder)

){

completePuzzle.style.opacity =
"1";

completePuzzle.style.pointerEvents =
"auto";

completePuzzle.innerHTML =
"Solved 😭🔥";

}

}

createPuzzle();

/* STAR BLAST */

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

let startX = 0;

cake.addEventListener(
"touchstart",
(e)=>{

startX =
e.touches[0].clientX;

});

cake.addEventListener(
"touchmove",
(e)=>{

let moveX =
e.touches[0].clientX;

if(Math.abs(moveX - startX) > 80){

document
.querySelectorAll(
".cakeWrap"
)[0]
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

});

/* DESKTOP */

cake.addEventListener(
"mousemove",
(e)=>{

if(e.buttons === 1){

document
.querySelectorAll(
".cakeWrap"
)[0]
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

let finalStart = 0;

finalCake.addEventListener(
"touchstart",
(e)=>{

finalStart =
e.touches[0].clientX;

});

finalCake.addEventListener(
"touchmove",
(e)=>{

let moveX =
e.touches[0].clientX;

if(Math.abs(moveX - finalStart) > 80){

document
.querySelectorAll(
".cakeWrap"
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

});

/* DESKTOP */

finalCake.addEventListener(
"mousemove",
(e)=>{

if(e.buttons === 1){

document
.querySelectorAll(
".cakeWrap"
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

});
