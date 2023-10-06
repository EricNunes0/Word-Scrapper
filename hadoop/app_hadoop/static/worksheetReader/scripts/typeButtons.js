function typeButtons(type) {
    let animationDuration = 0.5;
    const inputHidden = document.querySelector("#type-hidden");
    inputHidden.value = type;
    const inputDivs = document.querySelectorAll(".csv-input-divs");
    const typeButtons = document.querySelectorAll(".type-buttons");
    for(const button of typeButtons) {
        if(button.id === `${type}-button`) {
            button.classList.add("selected");
            button.disabled = true;
        } else {
            button.classList.remove("selected");
            button.disabled = false;
        };
    };
    for(const input of inputDivs) {
        if(input.id === `${type}-div`) {
            input.classList.remove("closed")
            input.classList.add("opening");
            setTimeout(function() {
                input.classList.remove("opening");
                input.classList.add("opened");
            }, (animationDuration / 2) * 1000);
        } else {
            input.classList.remove("opened");
            input.classList.add("closing");
            setTimeout(function() {
                input.classList.remove("closing");
                input.classList.add("closed");
            }, (animationDuration / 2) * 1000);
        };
    };
};