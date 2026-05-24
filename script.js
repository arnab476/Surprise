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

const pieces =
document.querySelectorAll(
".piece"
);

const positions = [

"0px 0px",
"-68px 0px",
"-136px 0px",
"-204px 0px",
"-272px 0px",

"0px -68px",
"-68px -68px",
"-136px -68px",
"-204px -68px",
"-272px -68px"

];

pieces.forEach((piece,index)=>{

piece.style.backgroundPosition =
positions[
Math.floor(
Math.random()*10
)
];

});

/* FIRST CAKE */

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
.querySelector(".cakeWrap")
.classList.add("cakeCut");

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

/* SKIP BUTTON */

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

/* PUZZLE OPEN */

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

let finalDragging = false;

finalCake.addEventListener(
"mousedown",
()=>{

finalDragging = true;

});

document.addEventListener(
"mouseup",
()=>{

finalDragging = false;

});

finalCake.addEventListener(
"mousemove",
()=>{

if(finalDragging){

finalCake.style.transform =
"scale(0.8) rotate(8deg)";

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
