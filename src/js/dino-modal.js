
document.addEventListener("DOMContentLoaded", () => {
    (() => {
      const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
      };
    
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);
    
      function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
      }
    })();
  });

  // (() => {
  //   const refs = {
  //     openModalBtn: document.querySelector("[data-modal-open]"),
  //     closeModalBtn: document.querySelector("[data-modal-close]"),
  //     modal: document.querySelector("[data-modal]"),
  //   };
  
  //   if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
  //     console.error("Ошибка: один из элементов не найден!");
  //     return;
  //   }
  
  //   refs.openModalBtn.addEventListener("click", () => {
  //     console.log("Открытие модалки");
  //     refs.modal.classList.remove("is-hidden");
  //   });
  
  //   refs.closeModalBtn.addEventListener("click", () => {
  //     console.log("Закрытие модалки");
  //     refs.modal.classList.add("is-hidden");
  //   });
  
  //   refs.modal.addEventListener("click", (event) => {
  //     if (event.target === refs.modal) {
  //       console.log("Закрытие при клике вне окна");
  //       refs.modal.classList.add("is-hidden");
  //     }
  //   });
  // })();
  

  