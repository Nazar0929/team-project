
function checkBiggestNumber() {
    const imp12 = document.querySelector("#imp1")
    const imp22 = document.querySelector("#imp2")
    const imp32 = document.querySelector("#imp3")

    const imp1 = Number(imp12.value) || 0
    const imp2 = Number(imp22.value) || 0
    const imp3  = Number(imp32.value) || 0


    if (isNaN(imp1) || isNaN(imp2) || isNaN(imp3)) {
        document.getElementById("result").textContent = "Будь ласка, введіть дійсні числа.";
    } else {
        const biggestNumber = Math.max(imp1, imp2, imp3);
        document.getElementById("result223").textContent =  biggestNumber;
    }
}

document.querySelector("#imp1").addEventListener("blur", checkBiggestNumber);
document.querySelector("#imp2").addEventListener("blur", checkBiggestNumber);
document.querySelector("#imp3").addEventListener("blur", checkBiggestNumber);

