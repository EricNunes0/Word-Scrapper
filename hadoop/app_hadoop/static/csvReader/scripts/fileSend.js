const send = document.querySelector("#csv-file");

if(send) {
    send.addEventListener("change", (e) => {
        let csv = document.querySelector("#csv-file").value;
        console.log(csv);
    });
};