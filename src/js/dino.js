

const dino = document.querySelector(".dino__dino");
const cactus = document.querySelector(".dino__cactus");
const points = document.querySelector("#points");
const startButton = document.querySelector(".dino__start");
const dinoText = document.querySelector(".dino__text");

let isJumping = false;
let isGameOver = false;
let isGameStarted = false;
let gameLoop;
let pointsInterval;

// Старт гри
function startGame() {
    if (!isGameStarted) {
        isGameStarted = true;
        isGameOver = false;
        points.textContent = "0";
        cactus.style.animation = "cactusMove 1.3s infinite linear";
        dinoText.textContent = "";
        checkCollision();

        // Лічильник очок
        pointsInterval = setInterval(() => {
            points.textContent = Number(points.textContent) + 1;
        }, 100);
    }
}

// Обробник кнопки старту
startButton.addEventListener("click", startGame);

// Обробник пробілу
document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !isJumping && !isGameOver) {
        e.preventDefault();
        jump();
    }
});

// Стрибок
function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.classList.add("jump");

    setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
    }, 1000);
}

// Перевірка зіткнень
function checkCollision() {
    gameLoop = setInterval(() => {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            gameOver();
        }
    }, 10);
}

// Кінець гри
function gameOver() {
    isGameOver = true;
    isGameStarted = false;
    clearInterval(gameLoop);
    clearInterval(pointsInterval);
    cactus.style.animation = "none";
    dinoText.textContent = `Гру закінчено! Ваш результат: ${points.textContent} очок`;
}















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

