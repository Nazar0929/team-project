const dino = document.querySelector(".dino__dino");
const gameArea = document.querySelector(".dino__game");
const cactus = document.querySelector(".dino__cactus");
const startBtn = document.querySelector(".dino__start");
const dinoText = document.querySelector(".dino__text");
const pointsDisplay = document.querySelector("#points");

let isJumping = false;
let isGameOver = false;
let isGameStarted = false;
let points = 0;
let pointsInterval;


const jumpSound = new Audio("jump.mp3");
const gameOverSound = new Audio("gameover.mp3");


startBtn.addEventListener("click", startGame);


document.addEventListener("keydown", e => {
  if (e.code === "Space" && !isJumping && !isGameOver) {
    e.preventDefault();
    jump();
  }
});

function startGame() {
  if (isGameStarted) return;

  isGameStarted = true;
  isGameOver = false;
  points = 0;
  pointsDisplay.textContent = points;
  dinoText.textContent = "";


  cactus.style.right = "-50px";
  cactus.style.transform = "scale(2)";
  cactus.style.animation = "cactusMove 1.5s linear infinite";
  gameArea.classList.add("ground-animate");

  startPoints();
  checkCollision();
}

function startPoints() {
  clearInterval(pointsInterval);
  pointsInterval = setInterval(() => {
    if (!isGameOver) {
      points++;
      pointsDisplay.textContent = points;
    }
  }, 100);
}

function jump() {
  if (isJumping) return;
  isJumping = true;
  dino.classList.add("jump");
  jumpSound.play();

  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 650);
}

function checkCollision() {
  const gameLoop = setInterval(() => {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
      dinoRect.right > cactusRect.left &&
      dinoRect.left < cactusRect.right &&
      dinoRect.bottom > cactusRect.top
    ) {
      isGameOver = true;
      isGameStarted = false;
      clearInterval(pointsInterval);
      cactus.style.animation = "none";
      gameArea.classList.remove("ground-animate");
      gameOverSound.play();
      dinoText.textContent = "Гру закінчено! Натисни 'Старт', щоб почати знову.";
    }
  }, 10);
}






// const dino = document.querySelector(".dino__dino");
// const gameArea = document.querySelector(".dino__game");
// const cactus = document.querySelector(".dino__cactus");
// const getBtn = document.querySelector('.dino__start');
// const dinoText = document.querySelector('.dino__text');
// const pointsDisplay = document.querySelector('#points'); 
// let isJumping = false;
// let isGameOver = false;
// let isGameStarted = false;
// let gameLoop;
// let points = 0; 
// let pointsInterval; 

// function startGame() {
//     if (!isGameStarted) {
//         isGameStarted = true;
//         isGameOver = false;
//         points = 0;
//         pointsDisplay.textContent = points; 
//         cactus.style.animation = "cactusMove 1.3s infinite linear";
//         checkCollision();
//         startPoints();
//         dinoText.textContent = "";
//     }
// }


// function startPoints() {
//     clearInterval(pointsInterval);
//     pointsInterval = setInterval(() => {
//         if (!isGameOver) {
//             points++;
//             pointsDisplay.textContent = points;
//         }
//     }, 100); 
// }

// getBtn.addEventListener("click", startGame);

// document.addEventListener("keydown", (e) => {
//     if (e.code === "Space" && !isJumping && !isGameOver) {
//         e.preventDefault();
//         jump();
//     }
// });

// function jump() {
//     if (isJumping) return;
//     isJumping = true;
//     dino.classList.add("jump");
    
//     setTimeout(() => {
//         dino.classList.remove("jump");
//         isJumping = false;
//     }, 1000); 
// }

// function checkCollision() {
//     gameLoop = setInterval(() => {
//         const dinoRect = dino.getBoundingClientRect();
//         const cactusRect = cactus.getBoundingClientRect();

//         if (
//             dinoRect.right > cactusRect.left &&
//             dinoRect.left < cactusRect.right &&
//             dinoRect.bottom > cactusRect.top
//         ) {
//             isGameOver = true;
//             isGameStarted = false;
//             clearInterval(gameLoop);
//             clearInterval(pointsInterval); 
//             cactus.style.animation = "none";
//             gameArea.style.animation = "none";
//             dinoText.textContent = "Гру закінчено! Натисніть на кнопку, щоб почати спочатку";
//         }
//     }, 10);
// }
