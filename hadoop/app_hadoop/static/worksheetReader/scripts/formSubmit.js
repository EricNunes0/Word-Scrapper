const form = document.querySelector("#csv-form");
const submitButton = document.querySelector("#csv-submit-button");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    const extensionSelect = document.querySelector("#extension-select");
    const type = document.querySelector(`#type-hidden`).value;
    const typeInput = document.querySelector(`#${type}-input`);
    const activeButtonRows = document.querySelector(".active-buttons#rows")

    if(extensionSelect.value.length === 0) {
        extensionSelectError();
        errorAlert("Você precisa informar um formato de arquivo!");
        return;
    };
    if(!typeInput.value) {
        if(type === "file") {
            fileInputError();
            errorAlert("Envie um arquivo!");
        } else if(type === "url") {
            errorAlert("Informe uma URL!");
        };
        return;
    };
    if(activeButtonRows.checked) {
        if(activeButtonRowHandler()) {
            activeButtonRowError();
            errorAlert("Informe a quantidade de linhas!");
            return;
        };
    };
    form.submit();
});