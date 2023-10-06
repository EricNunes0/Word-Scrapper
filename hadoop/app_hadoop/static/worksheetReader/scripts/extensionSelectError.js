function extensionSelectError() {
    let animationDuration = 1;
    const extensionSelect = document.querySelector("#extension-select");
    extensionSelect.classList.add("error");
    setTimeout(function() {
        extensionSelect.classList.remove("error");
    }, animationDuration * 1000);
};