const wsAreaIndex = document.querySelector("#ws-area-index");
const wsAreaResults = document.querySelector("#ws-area-results");
const cardAnimationDuration = 0.3;

function leftCardAnimation({oldCard, newCard}) {
    const wsAreaOld = document.querySelector(`#ws-area-${oldCard}`);
    const wsAreaNew = document.querySelector(`#ws-area-${newCard}`);
    wsAreaOld.classList.add("closing");
    setTimeout(function() {
        wsAreaOld.classList.replace("closing", "closed");
        wsAreaNew.classList.remove("closed");
        wsAreaNew.classList.add("opening");
        document.querySelector("#ws-home").className = newCard;
        setTimeout(function() {
            wsAreaNew.classList.remove("opening");
        }, cardAnimationDuration * 1000);
    }, cardAnimationDuration * 1000);
};

function rightCardAnimation({oldCard, newCard}) {
    const wsAreaOld = document.querySelector(`#ws-area-${oldCard}`);
    const wsAreaNew = document.querySelector(`#ws-area-${newCard}`);
    wsAreaOld.classList.add("closing");
    setTimeout(function() {
        wsAreaOld.classList.replace("closing", "closed");
        wsAreaNew.classList.remove("closed");
        wsAreaNew.classList.add("opening");
        document.querySelector("#ws-home").className = newCard;
        setTimeout(function() {
            wsAreaNew.classList.remove("opening");
        }, cardAnimationDuration * 1000);
    }, cardAnimationDuration * 1000);
};