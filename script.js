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

/* REAL PUZZLE */

const puzzleGrid =
document.querySelector(".puzzleGrid");

puzzleGrid.innerHTML = `
  <div class="piece piece3"></div>
  <div class="piece piece1"></div>
  <div class="piece piece4"></div>
  <div class="piece piece2"></div>
`;

/* FIRST CAKE */

let isDragging = false;

cake.addEventListener("mousedown",()=>{

  isDragging = true;

});

document.addEventListener("mouseup",()=>{

  isDragging = false;

});

cake.addEventListener("mousemove",()=>{

  if(isDragging){

    cake.classList.add("cakeCut");

    setTimeout(()=>{

      cakeScreen.classList.remove("active");

      funnyScreen.classList.add("active");

      cake.classList.remove("cakeCut");

    },700);

  }

});

/* SKIP BUTTON */

skipBtn.addEventListener("mouseover",()=>{

  monkeyPopup.innerHTML = `
    <img src="monkey.jpg" class="monkey">
    <div class="popupText">
      Eto soja na 😭
    </div>
  `;

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

let finalDragging = false;

finalCake.addEventListener("mousedown",()=>{

  finalDragging = true;

});

document.addEventListener("mouseup",()=>{

  finalDragging = false;

});

finalCake.addEventListener("mousemove",()=>{

  if(finalDragging){

    finalCake.classList.add("cakeCut");

    setTimeout(()=>{

      finalCakeScreen.classList.remove("active");

      birthdayScreen.classList.add("active");

      bgMusic.play();

      finalCake.classList.remove("cakeCut");

    },700);

  }

});
