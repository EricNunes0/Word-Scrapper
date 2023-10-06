let backgroundAnimationInterval = 0.5;
let circlesAnimationDurationMin = 5;
let circlesAnimationDurationMax = 10;

setInterval(function() {
    const background = document.querySelector("#worksheet-background-circles-div");
    let circleAnimationDur = circlesAnimationDurationMin + Math.floor(Math.random() * (circlesAnimationDurationMax - circlesAnimationDurationMin));
    const circle = document.createElement("span");
    circle.className = "worksheet-background-circles";
    circle.style.left = `${Math.floor(Math.random() * 100)}%`;
    circle.style.animationDuration = `${circleAnimationDur}s`;
    background.appendChild(circle);

    setTimeout(function() {
        background.removeChild(circle);
    }, circleAnimationDur * 1000);
}, backgroundAnimationInterval * 1000);