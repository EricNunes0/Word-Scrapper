var scrapCount = 0;

function getScrap({scrap}) {
    const wsScrapDiv = document.querySelector("#ws-scrap-div");
    let out = "";
    scrap.forEach((scraped) => {
        out += `<div class = "ws-scrap-divs ${scrapCount}">
            <div class = "ws-scrap-word-divs">
                <span class = "ws-scrap-word-spans">${scraped[0]}</span>
            </div>
            <div class = "ws-scrap-count-divs">
                <span class = "ws-scrap-count-spans">${scraped[1]}</span>
            </div>
        </div>
        `;
        scrapCount == 0 ? scrapCount = 1 : scrapCount = 0;
    });
    wsScrapDiv.innerHTML = out;
};