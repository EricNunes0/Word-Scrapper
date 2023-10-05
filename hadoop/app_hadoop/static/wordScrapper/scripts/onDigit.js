var letterMax = 10000;
const letterCounter = document.querySelector("#letter-counter");

document.querySelector("#text-input").addEventListener("input", (e) => {
    let textInput = document.querySelector("#text-input");
    let value = textInput.value;
    letterCounter.innerHTML = `${value.length}/${letterMax}`;
    if(value.length > letterMax) {
        letterCounter.className = "error";
    } else if(value.length > (letterMax - 200)) {
        letterCounter.className = "warn";
    } else {
        letterCounter.className = "";
    };
});