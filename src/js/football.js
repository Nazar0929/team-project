// DOM
const ball = document.querySelector('#football-ball');
const gates = document.querySelector('#football-gates');
const field = document.querySelector('#football-field');
const countOutput = document.querySelector('#football-count');
const timeOutput = document.querySelector('#football-time');
const spanOutput = document.querySelector('#football-output');
const playBtn = document.querySelector('[data-football="play"]');
const restartBtn = document.querySelector('[data-football="restart"]');
const gameOver = document.querySelector('[data-football="end"]');
const backdrop = document.querySelector('[data-football="backdrop"]');
const table = document.querySelector('[data-football="table"]');
const tableCloseBtn = document.querySelector('#table-close-btn');
const tableList = document.querySelector('#football-table-list');
const clearTableBtn = document.querySelector('#clear-table-btn');
const nameInput = document.querySelector('#user-name-input');
const page = document.body;

let countOfGoals = 0;
let timeScore = 30;
let isPlaying = false;
let isGoal = false;
let intervalId;

// Ворота
const gatesWidth = gates.offsetWidth;
const gatesHeight = gates.offsetHeight;
const gatesX = field.offsetWidth - gatesWidth - 30;
const gatesY = (field.offsetHeight - gatesHeight)/2;
gates.style.right = '30px';
gates.style.top = `${gatesY}px`;

// М'яч
const ballWidth = ball.offsetWidth;
const ballHeight = ball.offsetHeight;
let ballX = 60 + ballWidth/2;
let ballY = (field.offsetHeight - ballHeight)/2 + ballHeight/2;
ball.style.left = `${ballX}px`;
ball.style.top = `${ballY}px`;
timeOutput.textContent = `0:${timeScore}`;

// --- Запуск гри ---
function startGame() {
  countOfGoals = 0;
  timeScore = 30;
  countOutput.textContent = '0';
  timeOutput.textContent = `0:${timeScore}`;
  isPlaying = true;
  isGoal = false;

  // Повернути м’яч у стартову позицію
  ballX = 60 + ballWidth/2;
  ballY = (field.offsetHeight - ballHeight)/2 + ballHeight/2;
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  // Ховаємо backdrop і кінець гри
  backdrop.classList.add('is-hidden');
  gameOver.classList.add('is-hidden');

  // Прокрутка сторінки завжди активна
  page.classList.remove('no-scroll');

  setTime();
}

// --- Таймер ---
function setTime() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (timeScore > 0) timeScore--;
    else { endGame(); }
    timeOutput.textContent = `0:${String(timeScore).padStart(2,'0')}`;
  },1000);
}

// --- Кінець гри ---
function endGame() {
  isPlaying = false;
  clearInterval(intervalId);
  spanOutput.textContent = countOfGoals;

  // Показуємо блок з Restart
  gameOver.classList.remove('is-hidden');

  // Прокрутка сторінки активна
  page.classList.remove('no-scroll');

  saveResultToStorage(nameInput.value || 'Гравець', countOfGoals);
}

// --- Клік по полю ---
field.addEventListener('click', e=>{
  if (!isPlaying || isGoal) return;

  let newX = e.offsetX;
  let newY = e.offsetY;

  newX = Math.max(ballWidth/2, Math.min(newX, field.offsetWidth-ballWidth/2));
  newY = Math.max(ballHeight/2, Math.min(newY, field.offsetHeight-ballHeight/2));

  if (newX-ballWidth/2 >= gatesX && newX+ballWidth/2 <= gatesX+gatesWidth) {
    if (newY-ballHeight/2 < gatesY) newY = gatesY+ballHeight/2;
    if (newY+ballHeight/2 > gatesY+gatesHeight) newY = gatesY+gatesHeight-ballHeight/2;
  }

  ball.style.left = `${newX}px`;
  ball.style.top = `${newY}px`;

  const isInsideGate = newX-ballWidth/2 >= gatesX &&
    newX+ballWidth/2 <= gatesX+gatesWidth &&
    newY-ballHeight/2 >= gatesY &&
    newY+ballHeight/2 <= gatesY+gatesHeight;

  if (isInsideGate) {
    isGoal = true;
    countOfGoals++;
    countOutput.textContent = countOfGoals;

    setTimeout(()=>{
      ballX = 60 + ballWidth/2;
      ballY = (field.offsetHeight - ballHeight)/2 + ballHeight/2;
      ball.style.left = `${ballX}px`;
      ball.style.top = `${ballY}px`;
      isGoal = false;
    },1000);
  }
});

// --- Кнопки ---
playBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// --- Модалка таблиці ---
function openTableModal(){
  table.classList.remove('is-hidden');
  page.classList.add('no-scroll'); // тільки для таблиці
}
function closeTableModal(){
  table.classList.add('is-hidden');
  page.classList.remove('no-scroll');
}
tableCloseBtn.addEventListener('click', closeTableModal);
table.addEventListener('click', e=>{
  if (!e.target.closest('.football__modal')) closeTableModal();
});

// --- LocalStorage ---
function saveResultToStorage(name, score){
  const data = JSON.parse(localStorage.getItem('football-results'))||[];
  data.push({name, score});
  localStorage.setItem('football-results', JSON.stringify(data));
  loadResultsFromStorage();
}

function loadResultsFromStorage(){
  const stored = JSON.parse(localStorage.getItem('football-results'))||[];
  if (stored.length===0){
    tableList.innerHTML = '<p class="football__text">Ще не має результатів</p>';
    return;
  }
  stored.sort((a,b)=>b.score-a.score);
  tableList.innerHTML = '';
  stored.forEach(({name, score})=>{
    tableList.insertAdjacentHTML('beforeend',`
      <div class="football__row">
        <h3 class="football__header">${name}</h3>
        <p class="football__score">${score}</p>
      </div>`);
  });
}

// --- Очистка таблиці ---
clearTableBtn.addEventListener('click', ()=>{
  localStorage.removeItem('football-results');
  loadResultsFromStorage();
});

// --- Перший запуск ---
loadResultsFromStorage();
