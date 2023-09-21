function limitSub() {
    const limitInput = document.querySelector("#limit-input");
    const min = limitInput.min;

    let increment = parseInt(limitInput.value) - 1;
    if(increment >= min) {
        limitInput.value = increment;
    };
};