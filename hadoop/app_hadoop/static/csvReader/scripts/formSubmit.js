const form = document.querySelector("#csv-form");
const submitButton = document.querySelector("#csv-submit-button");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    let type = document.querySelector(`#type-hidden`).value;
    console.log(type);
    let textInput = document.querySelector(`#csv-${type}`);
    if(type === "file") {
        if(!textInput.value) {
            errorAlert("Envie um arquivo!");
            return;
        };
    } else if(type === "url") {
        if(!textInput.value) {
            errorAlert("Informe uma URL!");
            return;
        };
    };
    form.submit();
});