const wsForm = document.querySelector("#ws-form");
const submitButtons = document.querySelectorAll(".submit-buttons");

for(const submitButton of submitButtons) {
    submitButton.addEventListener("click", function(e) {
        e.preventDefault();
        let type = document.querySelector(`#id-hidden`).value;
        console.log(type);
        let textInput = document.querySelector(`#${type}-input`);
        console.log(textInput);
        let warning = document.querySelector("#ws-warning");
        if(!textInput.value) {
            warning.innerHTML = "Você precisa inserir um texto!";
            return;
        };
        if(type === "text") {
            console.log(textInput.value.length, letterMax)
            if(textInput.value.length > letterMax) {    
                warning.innerHTML = `Você atingiu o limite máximo de ${letterMax} caracteres!`;
                return;
            };
        };
        warning.innerHTML = "";
        wsForm.submit();
    });
};