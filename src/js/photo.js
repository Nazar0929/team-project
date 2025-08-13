const listEl = document.querySelector('.photo__list');
const itemEl = document.querySelectorAll('.photo__item');
const buttonRef = document.querySelectorAll('.photo__button');
console.log(buttonRef);

let currentIndex = 0;
function updateSlider() {
  listEl.style.transform = `translateX(${-currentIndex * 100}%)`;
}
// ArrowRight  ArrowLeft

window.addEventListener('keydown', event => {
  console.log(event.code);
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

buttonRef.forEach(button => {
  // console.log(button.dataset.action);

  button.addEventListener('click', event => {
    const action = button.dataset.action;
    if (action === 'left') {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    } else if (action === 'right') {
      if (currentIndex < itemEl.length - 1) {
        currentIndex++;
        updateSlider();
      }
    }
  });
});
