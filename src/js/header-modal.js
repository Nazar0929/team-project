

const register = document.querySelector(".register"),
      backdrop = document.querySelector(".register__backdrop"),
      closeBtn = document.querySelector(".register__close"),
      saveBtn = document.querySelector(".register__button"),
      input = document.querySelector(".register__input"),
      greeting = document.querySelector(".header__greetings");

// Відкриття модалки
function openModal() {
    register.classList.remove("backdrop-hidden");
    document.body.classList.add("no-scroll");
}

// Закриття модалки
function closeModal() {
    register.classList.add("backdrop-hidden");
    document.body.classList.remove("no-scroll");
}

// Збереження імені
function saveName() {
    if (input.value.trim()) {
        greeting.textContent = `Вітаємо, ${input.value.trim()}!`;
        input.classList.remove("error");
        input.placeholder = "Ваше ім’я...";
        closeModal();
    } else {
        input.placeholder = "Введіть ім'я!";
        input.classList.add("error");
    }
}

// Закриття по кнопці
closeBtn.addEventListener("click", closeModal);

// Закриття по бекдропу
backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
});

// Закриття по ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// Збереження імені
saveBtn.addEventListener("click", saveName);

// Показати модалку при першому відкритті сторінки
document.addEventListener("DOMContentLoaded", openModal);


