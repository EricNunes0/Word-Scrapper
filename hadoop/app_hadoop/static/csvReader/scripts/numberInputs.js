const numberInputs = document.querySelectorAll(".csv-number-inputs");

for(const number of numberInputs) {
    number.addEventListener("change", () => {
        let value = parseInt(number.value);
        let min = parseInt(number.min);
        let max = parseInt(number.max);
        console.log(value, min, max);
        if(value > max) {
            numberInputToMax(number);
            warningAlert(`O máximo de linhas é ${max}!`);
            return;
        };
        if(value < min) {
            numberInputToMin(number);
            warningAlert(`O mínimo de linhas é ${min}!`);
            return;
        };
        warningAlert("");
    });
};

function numberInputToMin(number) {
    number.value = number.min;
};

function numberInputToMax(number) {
    number.value = number.max;
};