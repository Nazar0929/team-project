
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





















// document.addEventListener("DOMContentLoaded", () => {
//     const backdrop = document.querySelector(".register__backdrop");
//     const closeBtn = document.querySelector(".register__close");
//     const saveBtn = document.querySelector(".register__button");
//     const input = document.querySelector(".register__input");
//     const greeting = document.querySelector(".header__greetings"); // має бути елемент у header

//     function openModal() {
//         backdrop.classList.remove("backdrop-hidden");
//         document.body.classList.add("no-scroll");
//     }

//     function closeModal() {
//         backdrop.classList.add("backdrop-hidden");
//         document.body.classList.remove("no-scroll");
//     }

//     function saveName() {
//         if (input.value.trim()) {
//             greeting.textContent = `Вітаємо, ${input.value.trim()}!`;
//             input.classList.remove("error");
//             input.placeholder = "Ваше ім’я...";
//             closeModal();
//         } else {
//             input.placeholder = "Введіть ім'я!";
//             input.classList.add("error");
//         }
//     }

//     input.addEventListener("input", () => {
//         input.classList.remove("error");
//         input.placeholder = "Ваше ім’я...";
//     });

//     closeBtn.addEventListener("click", closeModal);
//     backdrop.addEventListener("click", (e) => {
//         if (e.target === backdrop) closeModal();
//     });
//     document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape") closeModal();
//     });
//     saveBtn.addEventListener("click", saveName);

//     // відкриваємо при завантаженні
//     openModal();
// });






// document.addEventListener("DOMContentLoaded", () => {
//     const backdrop = document.querySelector(".register__backdrop"),
//           register = document.querySelector(".register"),
//           closeBtn = document.querySelector(".register__close"),
//           saveBtn = document.querySelector(".register__button"),
//           input = document.querySelector(".register__input"),
//           greeting = document.querySelector(".header__greetings");

//     function openModal() {
//         backdrop.classList.remove("backdrop-hidden");
//         document.body.classList.add("no-scroll");
//     }

//     function closeModal() {
//         backdrop.classList.add("backdrop-hidden");
//         document.body.classList.remove("no-scroll");
//     }

//     function saveName() {
//         if (input.value.trim()) {
//             greeting.textContent = `Вітаємо, ${input.value.trim()}!`;
//             input.classList.remove("error");
//             input.placeholder = "Ваше ім’я...";
//             closeModal();
//         } else {
//             input.placeholder = "Введіть ім'я!";
//             input.classList.add("error");
//         }
//     }

//     closeBtn.addEventListener("click", closeModal);
//     backdrop.addEventListener("click", (e) => {
//         if (e.target === backdrop) closeModal();
//     });
//     document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape") closeModal();
//     });
//     saveBtn.addEventListener("click", saveName);

//     openModal(); // відкриває одразу при завантаженні
// });



















