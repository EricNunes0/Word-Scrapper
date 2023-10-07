function moveLocation({before, after}) {
    const csvBefore = document.querySelector(`#csv-${before}`);
    const csvAfter = document.querySelector(`#csv-${after}`);
    if(csvBefore && csvAfter) {
        csvBefore.classList.add("closed");
        csvAfter.classList.remove("closed");
    };
};