const ballEl = document.querySelector(".socker__ball");
const fieldEl = document.querySelector(".socker__field");
const spanEl = document.querySelector(".socker__span");



fieldEl.addEventListener("click", (e) => {
    const fieldRect = fieldEl.getBoundingClientRect();

    let x = e.clientX - fieldRect.left - ballEl.clientWidth / 2;
    let y = e.clientY - fieldRect.top - ballEl.clientHeight / 2;

    x = Math.max(0, Math.min(x, fieldEl.clientWidth - ballEl.clientWidth));
    y = Math.max(0, Math.min(y, fieldEl.clientHeight - ballEl.clientHeight));

    ballEl.style.left = `${x}px`;
    ballEl.style.top = `${y}px`;
});


ballEl.addEventListener("mousemove", onMouseMove) 

function onMouseMove(event) {

    console.log(event.clientX);
    console.log(event.clientY);
    

    const x = 1080;
    const y = 180;

    let goal = 0;

    if (event.clientX > 1000 && event.clientX < 1080 && event.clientY > 100 && event.clientY < 230) {
        console.log("Great");
        goal += 1;
        spanEl.textContent = goal;
    } 
    
}
