function tableAddRows(planilha) {
    let planilhaJson = JSON.parse(planilha);
    let ths = Object.keys(planilhaJson[0]);
    const tbody = document.querySelector("#csv-table-tbody");
    const firstRow = document.querySelector("#first-row");
    for(let i = 0; i <= ths.length - 1; i++) {
        let th = document.createElement("th");
        th.className = "table-headers";
        th.innerHTML = ths[i];
        firstRow.appendChild(th);
    };
    for(let j = 0; j <= planilhaJson.length - 1; j++) {
        let tr = document.createElement("tr");
        tr.className = "table-rows";
        for(let k = 0; k <= ths.length - 1; k++) {
            let td = document.createElement("td");
            td.className = "table-datas";
            td.id = `${j}-${k}`;
            td.innerHTML = planilhaJson[j][ths[k]];
            tr.appendChild(td);
        };
        tbody.appendChild(tr);
    };
};