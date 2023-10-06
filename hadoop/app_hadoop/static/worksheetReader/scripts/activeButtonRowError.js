function activeButtonRowError() {
    let animationDuration = 1;
    const rowsInput = document.querySelector(".number-inputs#input-rows");
    rowsInput.classList.add("error");
    setTimeout(function() {
        rowsInput.classList.remove("error");
    }, animationDuration * 1000);
};