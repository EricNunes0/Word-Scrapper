function fileInputError() {
    let animationDuration = 1;
    const fileInput = document.querySelector("#file-input");
    if(fileInput) {
        fileInput.classList.add("error");
        setTimeout(function() {
            fileInput.classList.remove("error");
        }, animationDuration * 1000);
    };
};