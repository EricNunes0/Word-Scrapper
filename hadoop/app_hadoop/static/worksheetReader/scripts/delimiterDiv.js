function delimiterDiv(boolean) {
    const delimiterDiv = document.querySelector("#delimiter-div");
    if(boolean === true) {
        delimiterDiv.classList.remove("closed");
    } else {
        delimiterDiv.classList.add("closed");
    };
};