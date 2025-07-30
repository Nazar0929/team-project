const formEl = document.querySelector(".footer__form");


const backdropEl = document.querySelector(".backdrop");


formEl.addEventListener("submit", onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault()
    backdropEl.classList.toggle("is-hidden");
    
}
