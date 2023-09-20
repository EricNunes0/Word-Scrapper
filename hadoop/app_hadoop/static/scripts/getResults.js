if(jsonOriginal) {
    const wsOriginalText = document.querySelector("#ws-original-text");
    wsOriginalText.textContent = jsonOriginal;
    document.querySelector("#ws-home").className = "results";
    document.querySelector("#ws-area-index").classList.add("closed");
    document.querySelector("#word-counter").innerText = jsonWordCount;
    document.querySelector("#word-repeat-counter").innerText = jsonWordRepeat;
    document.querySelector("#word-biggest-counter").innerText = jsonWordBiggest;
} else {
    console.error("Não existe um arquivo JSON!");
    document.querySelector("#ws-area-results").classList.add("closed");
    document.querySelector("#ws-move-index-results").style.display = "none";
};
document.querySelector("#ws-area-details").classList.add("closed");