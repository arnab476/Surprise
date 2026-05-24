const knifeCursor = document.getElementById("knifeCursor");

document.addEventListener("mousemove",(e)=>{

  knifeCursor.style.left = e.clientX + "px";
  knifeCursor.style.top = e.clientY + "px";

});

/* SCREENS */

const cakeScreen = document.getElementById("cakeScreen");
const funnyScreen = document.getElementById("funnyScreen");
const puzzleScreen = document.getElementById("puzzleScreen");
const finalCakeScreen = document.getElementById("finalCakeScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

/* ELEMENTS */

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

  cake.style.transform = "scale(0.95) rotate(3deg)";

  setTimeout(()=>{

    cakeScreen.classList.remove("active");

    funnyScreen.classList.add("active");

  },500);

});

/* SKIP BUTTON */

skipBtn.addEventListener("mouseover",()=>{

  monkeyPopup.style.display = "flex";

  setTimeout(()=>{

    monkeyPopup.style.display = "none";

  },1200);

  const randomX = Math.random() * 500;
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

  finalCake.style.transform =
  "scaleX(0.7) rotate(8deg)";

  setTimeout(()=>{

    finalCakeScreen.classList.remove("active");

    birthdayScreen.classList.add("active");

    bgMusic.play();

  },700);

});
