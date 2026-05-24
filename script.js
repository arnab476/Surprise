const knifeCursor =
document.getElementById(
"knifeCursor"
);

document.addEventListener(
"mousemove",
(e)=>{

knifeCursor.style.left =
e.clientX + "px";

knifeCursor.style.top =
e.clientY + "px";

});

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

const positions = [

"0px 0px",
"-65px 0px",
"-130px 0px",
"-195px 0px",
"-260px 0px",

"0px -65px",
"-65px -65px",
"-130px -65px",
"-195px -65px",
"-260px -65px"

];

let shuffled =
positions.sort(
()=>Math.random()-0.5
);

shuffled.forEach((pos)=>{

const div =
document.createElement(
"div"
);

div.className =
"piece";

div.style.backgroundPosition =
pos;

puzzleGrid.appendChild(div);

});

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

star.style.animationDelay =
Math.random()*0.5 + "s";

blast.appendChild(star);

}

document.body.appendChild(
blast
);

setTimeout(()=>{

blast.remove();

},1200);

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

if(moveX - startX > 100){

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

let isDragging = false;

cake.addEventListener(
"mousedown",
()=>{

isDragging = true;

});

document.addEventListener(
"mouseup",
()=>{

isDragging = false;

});

cake.addEventListener(
"mousemove",
()=>{

if(isDragging){

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

if(moveX - finalStart > 100){

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
