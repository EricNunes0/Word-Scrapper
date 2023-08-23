const wsOriginal = document.querySelector("#ws-original-container");
const wsOriginalArea = document.querySelector("#ws-original-area");
const wsResultsContainer = document.querySelector("#ws-results-container");
const wsResultsArea = document.querySelector("#ws-results-area");
const wsOpenResultsButton = document.querySelector("#ws-open-results-button");

wsOriginal.addEventListener("click", () => {
    if(wsOriginal.classList.contains("hidden")) {
        closeResultsBar();
    };
});

wsOpenResultsButton.addEventListener("click", () => {
    setTimeout(function() {
        openResultsBar();
    }, 100);
});

function closeResultsBar() {
    wsOriginal.classList.remove("hidden");
    wsOriginalArea.classList.remove("hidden");
    wsResultsContainer.classList.add("hidden");
    wsResultsArea.classList.add("hidden");
};

function openResultsBar() {
    wsOriginal.classList.add("hidden");
    wsOriginalArea.classList.add("hidden");
    wsResultsContainer.classList.remove("hidden");
    wsResultsArea.classList.remove("hidden");
};