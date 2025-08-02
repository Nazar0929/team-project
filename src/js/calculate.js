const firstNumber = document.querySelector('.calculate__firstnumber');
const secondNumber = document.querySelector('.calculate__secondnumber');
const mathActions = document.querySelectorAll('.calculate__button');
const resultField = document.querySelector('.calculate__result');
const calculationBtn = document.querySelector('.calculate__calculation');

let one;

firstNumber.addEventListener('blur', event => {
  one = Number(event.currentTarget.value);
});

let two;

secondNumber.addEventListener('blur', event => {
  two = Number(event.currentTarget.value);
});

let result;

mathActions.forEach(btn => {
  btn.addEventListener('click', event => {
    const math = event.currentTarget.dataset.math;

    switch (math) {
      case 'plus':
        result = one + two;
        break;
      case 'multiple':
        result = one * two;
        break;
      case 'minus':
        result = one - two;
        break;
      case 'divide':
        result = one / two;
        if (two === 0) {
            result = "Помилка!";
        }
        break;
    }
  });
});

calculationBtn.addEventListener('click', () => {
  resultField.value = result;
});