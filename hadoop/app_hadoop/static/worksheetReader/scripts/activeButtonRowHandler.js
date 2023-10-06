function activeButtonRowHandler() {
    const rowsInput = document.querySelector(".number-inputs#input-rows");
    let value = rowsInput.value;
    let min = rowsInput.min;
    let max = rowsInput.max;
    if(!rowsInput.value) {
        return true;
    };
    if(rowsInput.length === 0) {
        return true;
    };
    return false;
};