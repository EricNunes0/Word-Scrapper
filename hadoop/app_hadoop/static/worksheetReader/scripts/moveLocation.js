function moveLocation({before, after}) {
    const csvBackground = document.querySelector("#csv-background");
    const csvBefore = document.querySelector(`#csv-${before}`);
    const csvAfter = document.querySelector(`#csv-${after}`);
    if(csvBefore && csvAfter) {
        csvBefore.classList.add("closed");
        csvAfter.classList.remove("closed");
        csvBackground.classList.remove(before);
        csvBackground.classList.add(after);
    };
};