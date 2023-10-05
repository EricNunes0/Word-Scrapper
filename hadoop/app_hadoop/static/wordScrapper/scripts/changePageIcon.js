const pageIcons = {
    "index": "static/wordScrapper/images/logo(0).png",
    "results": "static/wordScrapper/images/logo(1).png",
    "details": "static/wordScrapper/images/logo(2).png",
    "scrap": "static/wordScrapper/images/logo(3).png"
};

function changePageIcon({type}) {
    document.querySelector(`#ws-head-icon`).href = pageIcons[type];
};