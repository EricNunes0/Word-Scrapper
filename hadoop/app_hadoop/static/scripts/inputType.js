const optionButtons = document.querySelectorAll(".option-buttons");
const inputAreas = document.querySelectorAll(".ws-inputs-areas");
const inputs = document.querySelectorAll(".text-inputs");
const submitButtonsDivs = document.querySelectorAll(".submit-button-divs");

for(const optionButton of optionButtons) {
    optionButton.addEventListener("click", () => {
        disableOptionButtons();
        hideSubmitButtonDivs();
        for(const area of inputAreas) {
            if(area.id === `${optionButton.id}-area`) {
                optionButton.classList.add("selected");
                area.classList.remove("closed");
                document.querySelector(`#${optionButton.id}-submit-div`).classList.remove("closed");
                document.querySelector(`#id-hidden`).value = optionButton.id;
            } else {
                area.classList.add("closed");
            };
        };
    });
};

function disableInputs() {
    for(const input of inputs) {
        input.disabled = true;
    };
};

function disableOptionButtons() {
    for(const optionButton of optionButtons) {
        optionButton.classList.remove("selected");
    };
};

function hideSubmitButtonDivs() {
    for(const submitButtonsDiv of submitButtonsDivs) {
        submitButtonsDiv.classList.add("closed");
    };
}