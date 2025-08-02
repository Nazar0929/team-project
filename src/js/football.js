const ballEl = document.querySelector(".socker__ball");
const fieldEl = document.querySelector(".socker__field");

fieldEl.addEventListener("click", (e) => {
    const fieldRect = fieldEl.getBoundingClientRect();

    let x = e.clientX - fieldRect.left - ballEl.clientWidth / 2;
    let y = e.clientY - fieldRect.top - ballEl.clientHeight / 2;

    x = Math.max(0, Math.min(x, fieldEl.clientWidth - ballEl.clientWidth));
    y = Math.max(0, Math.min(y, fieldEl.clientHeight - ballEl.clientHeight));

    ballEl.style.left = `${x}px`;
    ballEl.style.top = `${y}px`;
});
