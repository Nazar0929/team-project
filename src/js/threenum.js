const inp = document.querySelector('.comp__input-num');
const btn = document.querySelector('.comp__search-num');
const text = document.querySelector('.comp__check-num');
const form = document.querySelector('.comp__input-box');

form.addEventListener('submit', event => {
  const secrertNumber = Math.round(Math.random() * (10 - 1) + 1);
  event.preventDefault();

  const guess = Number(inp.value.trim());

  if (guess >= 11) {
    text.innerHTML = 'введить чысло от 1 до 10';

    inp.value = '';
  }

  if (!isNaN(guess) && guess >= 1 && guess <= 10) {
    if (guess === secrertNumber) {
      text.innerHTML = `поздравляю вы вгадалы чысло ${secrertNumber}`;
      text.style.color = 'green';
    } else {
      text.innerHTML =  `вы не  вгадалы чысло ${secrertNumber}`;
      text.style.color = 'red';
    }
  }
});