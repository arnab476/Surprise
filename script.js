// script.js

const cakeScreen = document.getElementById("cakeScreen");
const funnyScreen = document.getElementById("funnyScreen");
const puzzleScreen = document.getElementById("puzzleScreen");
const galleryScreen = document.getElementById("galleryScreen");

const cutCakeBtn = document.getElementById("cutCakeBtn");

const solveBtn = document.getElementById("solveBtn");
const skipBtn = document.getElementById("skipBtn");

const monkeyPopup = document.getElementById("monkeyPopup");

const completePuzzle = document.getElementById("completePuzzle");

const bgMusic = document.getElementById("bgMusic");

/* CAKE BUTTON */

cutCakeBtn.addEventListener("click",()=>{

  cakeScreen.classList.remove("active");

  funnyScreen.classList.add("active");

});

/* SKIP BUTTON FUNNY */

skipBtn.addEventListener("click",()=>{

  monkeyPopup.style.display = "flex";

  setTimeout(()=>{

    monkeyPopup.style.display = "none";

  },2000);

  skipBtn.style.position = "absolute";

  const randomX = Math.random() * 200;
  const randomY = Math.random() * 500;

  skipBtn.style.left = randomX + "px";
  skipBtn.style.top = randomY + "px";

});

/* SOLVE BUTTON */

solveBtn.addEventListener("click",()=>{

  funnyScreen.classList.remove("active");

  puzzleScreen.classList.add("active");

});

/* COMPLETE PUZZLE */

completePuzzle.addEventListener("click",()=>{

  puzzleScreen.classList.remove("active");

  galleryScreen.classList.add("active");

  bgMusic.play();

});
