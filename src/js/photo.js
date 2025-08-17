const listEl = document.querySelector('.photo__list');
const itemEl = document.querySelectorAll('.photo__item');
const buttonRef = document.querySelectorAll('.photo__button');
const subtitleEl = document.querySelector('.photo__subtitle');
const descEl = document.querySelector('.photo__desc');

const students = [
  { 
    name: "Nazar", 
    desc: " Виконав секції: Камінь-ножиці-папір, Калькулятор часу, Футбол, Наша команда та Footer." 
  },
  { 
    name: "Taras", 
    desc: " Виконав секції: Header, Перевір, в який рік ти народився, Динозавр, Введіть три числа та Падаючі фрукти." 
  },
  { 
    name: "Ivan", 
    desc: " Виконав секцію: Вгадай число, яке загадав комп’ютер." 
  },
  { 
    name: "Oleksandr", 
    desc: " Виконав секцію: Вчені та Калькулятор." 
  }
];

let currentIndex = 0;

function updateSlider() {
  listEl.style.transform = `translateX(${-currentIndex * 100}%)`;
  subtitleEl.textContent = students[currentIndex].name;
  descEl.textContent = students[currentIndex].desc;
}

// Ініціалізуємо перший студент
updateSlider();

// Клавіші ArrowRight / ArrowLeft
window.addEventListener('keydown', event => {
  if (event.code === 'ArrowRight') {
    if (currentIndex < itemEl.length - 1) {
      currentIndex++;
      updateSlider();
    }
  } else if (event.code === 'ArrowLeft') {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }
});

// Кнопки
buttonRef.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'left' && currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else if (action === 'right' && currentIndex < itemEl.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });
});
