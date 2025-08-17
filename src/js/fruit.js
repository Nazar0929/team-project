document.addEventListener('DOMContentLoaded', () => {
  const redApple = document.querySelector('#red-apple');
  const goldApple = document.querySelector('#gold-apple');
  const greenApple = document.querySelector('#green-apple');
  const basket = document.querySelector('#basket');
  const block = document.querySelector('#fruit-block');
  const scoreText = document.querySelector('#fruit-score');
  const gameOver = document.querySelector('[data-fruit="over"]');
  const win = document.querySelector('[data-fruit="win"]');
  const pauseBtn = document.querySelector('[data-fruit="pause"]');
  const restartBtn = document.querySelector('[data-fruit="restart"]');

  const startBackdrop = document.querySelector('[data-fruit="backdrop"]');
  const startButton = startBackdrop.querySelector('[data-fruit="play"]');

  let score = 0;
  let isPlaying = false;
  let isPaused = false;
  let gameIntervalId = null;
  const activeFruitIntervals = new Set();

  const blockWidth = block.clientWidth;
  const blockHeight = block.clientHeight;

  let basketX = (blockWidth - basket.clientWidth) / 2;
  let basketY = blockHeight - basket.clientHeight - 10;

  basket.style.left = `${basketX}px`;
  basket.style.top = `${basketY}px`;

  function resetFruitPosition(fruit) {
    fruit.style.top = `-50px`;
    fruit.style.display = 'none';
  }

  [redApple, goldApple, greenApple].forEach(resetFruitPosition);


  startButton.addEventListener('click', () => {
    startBackdrop.classList.add('is-hidden');
    gameOver.classList.add('is-hidden');
    win.classList.add('is-hidden');
    isPlaying = true;
    isPaused = false;
    pauseBtn.textContent = 'Pause';
    score = 0;
    scoreText.textContent = score;
    startGameLoop();
  });


  pauseBtn.addEventListener('click', () => {
    if (!isPlaying) return;
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Resume' : 'Pause';
  });


  restartBtn.addEventListener('click', restartGame);


  gameOver.addEventListener('click', restartGame);

  function restartGame() {
    stopGame();
    score = 0;
    scoreText.textContent = score;
    [redApple, goldApple, greenApple].forEach(resetFruitPosition);
    basketX = (blockWidth - basket.clientWidth) / 2;
    basket.style.left = `${basketX}px`;

    gameOver.classList.add('is-hidden');
    win.classList.add('is-hidden');
    startBackdrop.classList.add('is-hidden');

    isPlaying = true;
    isPaused = false;
    pauseBtn.textContent = 'Pause';
    startGameLoop();
  }


  window.addEventListener('keydown', e => {
    if (!isPlaying || isPaused) return;

    const step = 20;
    if (e.code === 'ArrowLeft' && basketX - step >= 0) basketX -= step;
    if (e.code === 'ArrowRight' && basketX + step <= blockWidth - basket.clientWidth) basketX += step;
    basket.style.left = `${basketX}px`;
  });

  function startGameLoop() {
    clearInterval(gameIntervalId);
    gameIntervalId = setInterval(() => {
      if (isPaused) return;

      if (score >= 0 && score < 10) {
        const randomNum = Math.floor(Math.random() * 3) + 1;
        if (randomNum === 1) manageFruit(redApple);
        if (randomNum === 2) manageFruit(goldApple);
        if (randomNum === 3) manageFruit(greenApple);
      } else if (score >= 10) {
        win.classList.remove('is-hidden');
        stopGame();
      } else {
        gameOver.classList.remove('is-hidden');
        stopGame();
      }
    }, 2000);
  }

  function manageFruit(fruit) {
    let fruitY = -50;
    const fruitX = Math.random() * (blockWidth - fruit.clientWidth);
    fruit.style.left = `${fruitX}px`;
    fruit.style.top = `${fruitY}px`;
    fruit.style.display = 'block';

    const dropInterval = setInterval(() => {
      if (isPaused) return;

      if (fruitY < blockHeight) {
        fruitY += 4;
        fruit.style.top = `${fruitY}px`;

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
          activeFruitIntervals.delete(dropInterval);
        }
      } else {
        score -= 1;
        scoreText.textContent = score;
        resetFruitPosition(fruit);
        clearInterval(dropInterval);
        activeFruitIntervals.delete(dropInterval);
      }
    }, 20);

    activeFruitIntervals.add(dropInterval);
  }


  function stopGame() {
    isPlaying = false;
    clearInterval(gameIntervalId);
    activeFruitIntervals.forEach(id => clearInterval(id));
    activeFruitIntervals.clear();
  }
});
