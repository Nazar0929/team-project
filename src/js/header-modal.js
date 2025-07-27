const register = document.querySelector(".register"),
      closeBtn = document.querySelector(".register__close"),
      saveBtn = document.querySelector(".register__button"),
      input = document.querySelector(".register__input"),
      greeting = document.querySelector(".header__greetings");

document.body.classList.add("no-scroll"); 
closeBtn.addEventListener("click", closeModal);
saveBtn.addEventListener("click", saveName);

function closeModal() {
    register.classList.add("backdrop-hidden");
    document.body.classList.remove("no-scroll");
}

function saveName() {
    if (input.value.trim()) {
        
        greeting.textContent = `Вітаємо, ${input.value.trim()}!`
        closeModal();
    } else {
        input.placeholder = "Введіть ім'я!";
        input.classList.add("error");
    }
}
