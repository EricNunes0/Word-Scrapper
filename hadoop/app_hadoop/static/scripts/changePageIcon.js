const pageIcons = {
    "index": "static/images/logo(0).png",
    "results": "static/images/logo(1).png",
    "details": "static/images/logo(2).png",
    "scrap": "static/images/logo(3).png"
};

function changePageIcon({type}) {
    document.querySelector(`#ws-head-icon`).href = pageIcons[type];
};