const checkbox2 = document.querySelector("#cb-2");
const limitInput = document.querySelector("#limit-input");

checkbox2.addEventListener("click", () => {
    console.log("Oi")
    let cb2 = document.querySelector("#cb-2");
    let checkboxLimitOption = document.querySelector("#ws-checkbox-limit-div");
    if(cb2.checked) {
        checkboxLimitOption.classList.remove("closed");
    } else {
        checkboxLimitOption.classList.add("closed");
    };
});

limitInput.addEventListener("change", () => {
    const limitInput = document.querySelector("#limit-input");
    const min = limitInput.min;
    const max = limitInput.max;
    if(parseInt(limitInput.value) > max) {
        limitInput.value = max;
    } else if(parseInt(limitInput.value) < min) {
        limitInput.value = min;
    };
});