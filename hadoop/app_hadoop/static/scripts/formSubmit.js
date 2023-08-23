const wsForm = document.querySelector("#ws-form");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    let textInput = document.querySelector("#text-input");
    console.log(textInput);
    let warning = document.querySelector("#ws-warning");
    if(!textInput.value) {
        warning.innerHTML = "Você precisa inserir um texto!";
        return;
    };
    warning.innerHTML = "";
    wsForm.submit();
});