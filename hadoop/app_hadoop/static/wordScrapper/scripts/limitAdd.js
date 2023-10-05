function limitAdd() {
    const limitInput = document.querySelector("#limit-input");
    const max = limitInput.max;

    let increment = parseInt(limitInput.value) + 1;
    if(increment <= max) {
        limitInput.value = increment;
    };
};