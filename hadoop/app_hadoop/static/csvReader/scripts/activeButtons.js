const activeButtons = document.querySelectorAll(".active-buttons");

activeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let settingSection = document.querySelector(`#settings-section-${button.id}`);
        if(settingSection) {
            if(button.checked === true) {
                settingSection.classList.remove("closed");
            } else {
                settingSection.classList.add("closed");
            }
        };
    });
});