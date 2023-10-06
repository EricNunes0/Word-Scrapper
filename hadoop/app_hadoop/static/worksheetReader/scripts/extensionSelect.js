const extensionSelect = document.querySelector("#extension-select");
const fileInput = document.querySelector("#file-input");
const urlInput = document.querySelector("#url-input");

extensionSelect.addEventListener("change", () => {
    fileInput.value = "";
    urlInput.value = "";
    if(extensionSelect.value.length === 0) {
        fileInput.disabled = true;
        urlInput.disabled = true;
        fileInput.accept = "";
    } else {
        fileInput.disabled = false;
        urlInput.disabled = false;
        fileInput.accept = extensionSelect.value;
        if(extensionSelect.value === ".csv") {
            delimiterDiv(true);
        } else {
            delimiterDiv(false);
        };
    };
});