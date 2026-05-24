/* PETALS */
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
