function filterText({text}) {
    closeResultsBar();
    let originalText = document.querySelector("#ws-original-text")
    if(text) {
        let oldText = originalText.textContent;
        let words = [];
        oldText.trim().split(" ").forEach((word) => {
            words.push(word);
        });
        let newWords = [];
        for(let word of words) {
            if(word.includes(text)) {
                newWords.push(`<span class = "highlights">${word}</span>`);
            } else {
                newWords.push(word);
            };
        };
        let out = newWords.join(" ");
        originalText.innerHTML = out;
    };
};