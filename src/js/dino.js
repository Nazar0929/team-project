


document.addEventListener("DOMContentLoaded", () => {
  const dino = document.querySelector('#dinosour');
  const cactus = document.querySelector("#cactus");
  const startButton = document.querySelector('.dino__start');
  const points = document.querySelector('#points');
  const text = document.querySelector('.dino__text');

  let index = 1;
  let gameInterval;
  let cactusInterval;
  let groundInterval;
  let isJumpingUp = false;
  let isJumpingDown = true;
  let jumpUpInterval;
  let jumpDownInterval;
  let isGameStarted = false;

  function startGame() {
    if (isGameStarted) return;
    isGameStarted = true;

    // Скидаємо очки та текст
    points.textContent = "0";
    text.textContent = "";
    index = 1;

    // Скидаємо позицію кактуса
    cactus.style.left = "410px";
    cactus.style.animation = "cactusMove 1.3s infinite linear";

    // Запускаємо рух і рахунок
    cactusInterval = setInterval(moveCactus, 20);
    gameInterval = setInterval(addPoints, 500);
  }

  function moveCactus() {
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    if (cactusLeft < 0) {
      cactus.style.left = "410px";
    } else {
      cactus.style.left = cactusLeft - 5 + "px";
    }

    // Перевірка зіткнення
    if (cactusLeft > 0 && cactusLeft < 50 && dinoTop >= 140) {
      gameOver();
    }
  }

  function jump() {
    if (isJumpingUp || !isGameStarted) return;

    isJumpingUp = true;
    let jumpHeight = 0;

    jumpUpInterval = setInterval(() => {
      if (jumpHeight >= 100) {
        clearInterval(jumpUpInterval);
        isJumpingUp = false;
        jumpDown();
      } else {
        jumpHeight += 5;
        dino.style.top = 190 - jumpHeight + "px";
      }
    }, 20);
  }

  function jumpDown() {
    let jumpHeight = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    jumpDownInterval = setInterval(() => {
      if (jumpHeight >= 190) {
        clearInterval(jumpDownInterval);
        isJumpingDown = false;
      } else {
        jumpHeight += 5;
        dino.style.top = jumpHeight + "px";
      }
    }, 20);
  }

  function addPoints() {
    points.textContent = index++;
  }

  function gameOver() {
    clearInterval(cactusInterval);
    clearInterval(gameInterval);
    clearInterval(jumpUpInterval);
    clearInterval(jumpDownInterval);

    text.textContent = "Game Over!";
    cactus.style.animation = "none";
    isGameStarted = false;
  }

  // Клік по кнопці старту
  startButton.addEventListener("click", startGame);

  // Клік або пробіл для стрибка
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") jump();
  });
  dino.addEventListener("click", jump);
});





















// const dino = document.querySelector(".dino__dino");
// const cactus = document.querySelector(".dino__cactus");
// const points = document.querySelector("#points");
// const startButton = document.querySelector(".dino__start");
// const dinoText = document.querySelector(".dino__text");

// // Звуки
// const jumpSound = new Audio('./sounds/jump.mp3');
// const gameOverSound = new Audio('./sounds/gameover.mp3');
// const milestoneSound = new Audio('./sounds/milestone.mp3');



// let isJumping = false;
// let isGameOver = false;
// let isGameStarted = false;
// let gameLoop;
// let pointsInterval;
// let lastMilestone = 0;

// // Старт гри
// function startGame() {
//     if (!isGameStarted) {
//         isGameStarted = true;
//         isGameOver = false;
//         points.textContent = "0";
//         lastMilestone = 0;
//         cactus.style.animation = "cactusMove 1.3s infinite linear";
//         dinoText.textContent = "";
//         checkCollision();

//         // Лічильник очок
//         pointsInterval = setInterval(() => {
//             const currentPoints = Number(points.textContent) + 1;
//             points.textContent = currentPoints;

//             // Звук за кожні 100 очок
//             if (currentPoints % 100 === 0 && currentPoints !== lastMilestone) {
//                 lastMilestone = currentPoints;
//                 milestoneSound.currentTime = 0;
//                 milestoneSound.play();
//             }
//         }, 100);
//     }
// }

// // Обробник кнопки старту
// startButton.addEventListener("click", startGame);

// // Обробник пробілу
// document.addEventListener("keydown", (e) => {
//     if (e.code === "Space" && !isJumping && !isGameOver) {
//         e.preventDefault();
//         jump();
//     }
// });

// // Стрибок
// function jump() {
//     if (isJumping) return;
//     isJumping = true;

//     // Звук стрибка
//     jumpSound.currentTime = 0;
//     jumpSound.play();

//     dino.classList.add("jump");

//     setTimeout(() => {
//         dino.classList.remove("jump");
//         isJumping = false;
//     }, 1000);
// }

// // Перевірка зіткнень
// function checkCollision() {
//     gameLoop = setInterval(() => {
//         const dinoRect = dino.getBoundingClientRect();
//         const cactusRect = cactus.getBoundingClientRect();

//         if (
//             dinoRect.right > cactusRect.left &&
//             dinoRect.left < cactusRect.right &&
//             dinoRect.bottom > cactusRect.top
//         ) {
//             gameOver();
//         }
//     }, 10);
// }

// // Кінець гри
// function gameOver() {
//     isGameOver = true;
//     isGameStarted = false;
//     clearInterval(gameLoop);
//     clearInterval(pointsInterval);
//     cactus.style.animation = "none";

//     // Звук програшу
//     gameOverSound.currentTime = 0;
//     gameOverSound.play();

//     dinoText.textContent = `Гру закінчено! Ваш результат: ${points.textContent} очок`;
// }















// const dino = document.querySelector(".dino__dino");
// const cactus = document.querySelector(".dino__cactus");
// const points = document.querySelector("#points");
// const startButton = document.querySelector(".dino__start");
// const dinoText = document.querySelector(".dino__text");

// let isJumping = false;
// let isGameOver = false;
// let isGameStarted = false;
// let gameLoop;
// let pointsInterval;

// // Старт гри
// function startGame() {
//     if (!isGameStarted) {
//         isGameStarted = true;
//         isGameOver = false;
//         points.textContent = "0";
//         cactus.style.animation = "cactusMove 1.3s infinite linear";
//         dinoText.textContent = "";
//         checkCollision();

//         // Лічильник очок
//         pointsInterval = setInterval(() => {
//             points.textContent = Number(points.textContent) + 1;
//         }, 100);
//     }
// }

// // Обробник кнопки старту
// startButton.addEventListener("click", startGame);

// // Обробник пробілу
// document.addEventListener("keydown", (e) => {
//     if (e.code === "Space" && !isJumping && !isGameOver) {
//         e.preventDefault();
//         jump();
//     }
// });

// // Стрибок
// function jump() {
//     if (isJumping) return;
//     isJumping = true;
//     dino.classList.add("jump");

//     setTimeout(() => {
//         dino.classList.remove("jump");
//         isJumping = false;
//     }, 1000);
// }

// // Перевірка зіткнень
// function checkCollision() {
//     gameLoop = setInterval(() => {
//         const dinoRect = dino.getBoundingClientRect();
//         const cactusRect = cactus.getBoundingClientRect();

//         if (
//             dinoRect.right > cactusRect.left &&
//             dinoRect.left < cactusRect.right &&
//             dinoRect.bottom > cactusRect.top
//         ) {
//             gameOver();
//         }
//     }, 10);
// }

// // Кінець гри
// function gameOver() {
//     isGameOver = true;
//     isGameStarted = false;
//     clearInterval(gameLoop);
//     clearInterval(pointsInterval);
//     cactus.style.animation = "none";
//     dinoText.textContent = `Гру закінчено! Ваш результат: ${points.textContent} очок`;
// }















// const dino = document.querySelector(".dino__dino");
// const gameArea = document.querySelector(".dino__game");
// const cactus = document.querySelector(".dino__cactus");
// const points = document.querySelector('#points')
// const getBtn = document.querySelector('.dino__start');
// const dinoText = document.querySelector('.dino__text');

// let isJumping = false;
// let isGameOver = false;
// let isGameStarted = false;
// let gameLoop;

// function startGame() {
//     if (!isGameStarted) {
//         isGameStarted = true;
//         isGameOver = false;
//         cactus.style.animation = "cactusMove 1.3s infinite linear";
//         checkCollision();
//         dinoText.textContent = ""
//     }
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
//             cactus.style.animation = "none";
//             dinoText.textContent = "Гру закінчено! Натисніть на кнопку, щоб почати спочатку"
//         }
//     }, 10);
// }

// function getPoints(){
//     points.innerHTML = Number(points.innerHTML) + 1
// }


// startButton.addEventListener('click', () => {

//     if (gameInterval) {
//         clearInterval(gameInterval);
//     }
//     if (cactusInterval) {
//         clearInterval(cactusInterval);
//     }
//     if (groundInterval) {
//         clearInterval(groundInterval);
//     }
//     cactusInterval = setInterval(cactusMove, 7);
//     groundInterval = setInterval(groundMove, 10);
//     gameInterval = setInterval(() => {
//         getPoints()
//         // change()
//     }, 100);

// })

