const tableDatas = document.querySelectorAll(".table-datas");

for(const td of tableDatas) {
    let limite = 2;
    td.onmouseenter = () => {
        const tdPos = td.id.split("-");
        const tdColumn = tdPos[0];
        const tdRow = tdPos[1];
        for(const data of tableDatas) {
            let dataPos = data.id.split("-");
            const dataColumn = dataPos[0];
            const dataRow = dataPos[1];
            if((!(tdColumn === dataColumn && tdRow === dataRow)) && (tdColumn === dataColumn || tdRow === dataRow)) {
                if(parseInt(dataColumn) < (parseInt(tdColumn) + limite)) {
                    if(parseInt(dataColumn) > (parseInt(tdColumn) - limite)) {
                        data.classList.add("effect");
                    };
                };
            };
        };
    };
    td.onmouseleave = () => {
        const tdPos = td.id.split("-");
        const tdColumn = tdPos[0];
        const tdRow = tdPos[1];
        for(const data of tableDatas) {
            let dataPos = data.id.split("-");
            const dataColumn = dataPos[0];
            const dataRow = dataPos[1];
            if(tdColumn === dataColumn || tdRow === dataRow) {
                data.classList.remove("effect");
            };
        };
    };
};