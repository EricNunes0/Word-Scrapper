const fileInput = document.querySelector("#file-input");
const inputFileName = document.querySelector("#input-filename");

fileInput.addEventListener("change", (e) => {
    let newFileInput = document.querySelector("#file-input");
    let fileName = newFileInput.files.item(0).name;
    inputFileName.textContent = fileName;
});