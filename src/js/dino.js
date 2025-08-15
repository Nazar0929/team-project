const dino = document.querySelector(".dino__dino");
const gameArea = document.querySelector(".dino__game");
const cactus = document.querySelector(".dino__cactus");
const getBtn = document.querySelector('.dino__start');
const dinoText = document.querySelector('.dino__text');
const pointsDisplay = document.querySelector('#points'); // посилання на спан
let isJumping = false;
let isGameOver = false;
let isGameStarted = false;
let gameLoop;
let points = 0; // змінна для очок
let pointsInterval; // інтервал для підрахунку очок

function startGame() {
    if (!isGameStarted) {
        isGameStarted = true;
        isGameOver = false;
        points = 0;
        pointsDisplay.textContent = points; // обнуляємо очки
        cactus.style.animation = "cactusMove 1.3s infinite linear";
        checkCollision();
        startPoints(); // запускаємо підрахунок очок
        dinoText.textContent = "";
    }
}

// функція підрахунку очок
function startPoints() {
    clearInterval(pointsInterval);
    pointsInterval = setInterval(() => {
        if (!isGameOver) {
            points++;
            pointsDisplay.textContent = points;
        }
    }, 100); // кожні 0.1 секунди додаємо 1 очко
}

getBtn.addEventListener("click", startGame);

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !isJumping && !isGameOver) {
        e.preventDefault();
        jump();
    }
});

function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.classList.add("jump");
    
    setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
    }, 1000); 
}

function checkCollision() {
    gameLoop = setInterval(() => {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            isGameOver = true;
            isGameStarted = false;
            clearInterval(gameLoop);
            clearInterval(pointsInterval); // зупиняємо підрахунок очок
            cactus.style.animation = "none";
            dinoText.textContent = "Гру закінчено! Натисніть на кнопку, щоб почати спочатку";
        }
    }, 10);
}
