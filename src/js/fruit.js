// Елементи гри
document.addEventListener('DOMContentLoaded', () => {
const redApple = document.querySelector('#red-apple');
const goldApple = document.querySelector('#gold-apple');
const greenApple = document.querySelector('#green-apple');
const basket = document.querySelector('#basket');
const block = document.querySelector('#fruit-block');
// const startBackdrop = document.querySelector('[data-fruit="backdrop"]');
// const startButton = startBackdrop.querySelector('[data-fruit="play"]');
const scoreText = document.querySelector('#fruit-score');
const gameOver = document.querySelector('[data-fruit="over"]');
const win = document.querySelector('[data-fruit="win"]');

const startBackdrop = document.querySelector('[data-fruit="backdrop"]'); // тільки стартовий
const startButton = startBackdrop.querySelector('[data-fruit="play"]');

startButton.addEventListener('click', () => {
  startBackdrop.classList.add('is-hidden'); // ховаємо саме стартовий backdrop
  startGame();
});

let score = 0;
let isPlaying = false;

// Розміри блоку та початкові позиції корзини
const blockWidth = block.clientWidth;
const blockHeight = block.clientHeight;

let basketX = (blockWidth - basket.clientWidth) / 2;
let basketY = blockHeight - basket.clientHeight - 10;

basket.style.left = `${basketX}px`;
basket.style.top = `${basketY}px`;

// Початкові позиції фруктів
function resetFruitPosition(fruit) {
  fruit.style.top = `-50px`;
  fruit.style.display = 'none';
}

[redApple, goldApple, greenApple].forEach(resetFruitPosition);

// Слухач кнопки Play now
startButton.addEventListener('click', () => {
  startBackdrop.classList.add('is-hidden');
  gameOver.classList.add('is-hidden');
  win.classList.add('is-hidden');
  isPlaying = true;
  score = 0;
  scoreText.textContent = score;

  startGameLoop();
});

// Рух корзини клавішами
window.addEventListener('keydown', e => {
  if (!isPlaying) return;

  const step = 20;

  if (e.code === 'ArrowLeft' && basketX - step >= 0) {
    basketX -= step;
  }
  if (e.code === 'ArrowRight' && basketX + step <= blockWidth - basket.clientWidth) {
    basketX += step;
  }

  basket.style.left = `${basketX}px`;
});

// Головна функція запуску гри
function startGameLoop() {
  const intervalId = setInterval(() => {
    if (score >= 0 && score < 10) {
      const randomNum = Math.floor(Math.random() * 3) + 1;
      if (randomNum === 1) manageFruit(redApple);
      if (randomNum === 2) manageFruit(goldApple);
      if (randomNum === 3) manageFruit(greenApple);
    } else if (score >= 10) {
      win.classList.remove('is-hidden');
      isPlaying = false;
      clearInterval(intervalId);
    } else {
      gameOver.classList.remove('is-hidden');
      isPlaying = false;
      clearInterval(intervalId);
    }
  }, 2000); // Фрукти падають кожні 2 секунди
}

// Функція падіння фруктів
function manageFruit(fruit) {
  let fruitY = -50;
  const fruitX = Math.random() * (blockWidth - fruit.clientWidth);
  fruit.style.left = `${fruitX}px`;
  fruit.style.top = `${fruitY}px`;
  fruit.style.display = 'block';

  const dropInterval = setInterval(() => {
    if (fruitY < blockHeight) {
      fruitY += 4;
      fruit.style.top = `${fruitY}px`;

      // Перевірка зіткнення з корзиною
      if (
        fruitY + fruit.clientHeight >= basketY &&
        fruitY <= basketY + basket.clientHeight &&
        fruitX + fruit.clientWidth >= basketX &&
        fruitX <= basketX + basket.clientWidth
      ) {
        score += 1;
        scoreText.textContent = score;
        resetFruitPosition(fruit);
        clearInterval(dropInterval);
      }
    } else {
      // Якщо фрукт впав повз корзину
      score -= 1;
      scoreText.textContent = score;
      resetFruitPosition(fruit);
      clearInterval(dropInterval);
    }
  }, 20);
}});
