const knifeCursor = document.getElementById("knifeCursor");

document.addEventListener("mousemove",(e)=>{

  knifeCursor.style.left = e.clientX + "px";
  knifeCursor.style.top = e.clientY + "px";

});

const cakeScreen = document.getElementById("cakeScreen");
const funnyScreen = document.getElementById("funnyScreen");
const puzzleScreen = document.getElementById("puzzleScreen");
const finalCakeScreen = document.getElementById("finalCakeScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

const cake = document.getElementById("cake");
const finalCake = document.getElementById("finalCake");

const solveBtn = document.getElementById("solveBtn");
const skipBtn = document.getElementById("skipBtn");

const monkeyPopup = document.getElementById("monkeyPopup");

const completePuzzle = document.getElementById("completePuzzle");

const bgMusic = document.getElementById("bgMusic");

/* FIRST CAKE */

cake.addEventListener("contextmenu",(e)=>{

  e.preventDefault();

  cakeScreen.classList.remove("active");

  funnyScreen.classList.add("active");

});

/* SKIP BUTTON */

skipBtn.addEventListener("mouseover",()=>{

  monkeyPopup.style.display = "flex";

  setTimeout(()=>{

    monkeyPopup.style.display = "none";

  },1500);

  const randomX = Math.random() * 300;
  const randomY = Math.random() * 500;

  skipBtn.style.position = "absolute";

  skipBtn.style.left = randomX + "px";
  skipBtn.style.top = randomY + "px";

});

/* PUZZLE */

solveBtn.addEventListener("click",()=>{

  funnyScreen.classList.remove("active");

  puzzleScreen.classList.add("active");

});

/* COMPLETE */

completePuzzle.addEventListener("click",()=>{

  puzzleScreen.classList.remove("active");

  finalCakeScreen.classList.add("active");

});

/* FINAL CAKE */

finalCake.addEventListener("contextmenu",(e)=>{

  e.preventDefault();

  finalCake.style.transform = "scaleX(0.8) rotate(5deg)";

  setTimeout(()=>{

    finalCakeScreen.classList.remove("active");

    birthdayScreen.classList.add("active");

    bgMusic.play();

  },1000);

});
