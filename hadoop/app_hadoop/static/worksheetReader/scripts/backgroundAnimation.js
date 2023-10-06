var ctx;
var width, height;
var twoPI = Math.PI * 2;
var mX, mY;
var resize = true;
var per = { x: 0, y: 0 };

var canvasScenary;

window.onload = function() {
    const canvas = document.querySelector("#worksheet-background-canvas");
    width = canvas.width = window.innerWidth - 40;
    height = canvas.height = window.innerHeight - 40;
    ctx = canvas.getContext('2d');
  
    !resize || window.addEventListener('resize', function(e) {
        width = canvas.width = window.innerWidth - 40; height = canvas.height = window.innerHeight - 40;
    });
    window.addEventListener('mousemove', function(e) {
        mX = e.pageX - 20; mY = e.pageY - 20;
        per = {
            x: mX,
            y: mY
        };
    });
  
    mX = width / 2;
    mY = width / 2;
    per = {
        x: width / 2,
        y: height / 2, step: 1
    };
    window.setInterval(animateSky, 20);
}
  
function newRadialGradient(gradient) {
    var grad = ctx.createRadialGradient(gradient.x1, gradient.y1, gradient.r1, gradient.x1, gradient.y1, gradient.r2);
    for(var i = 0; i < gradient.stops.length; i++){
        grad.addColorStop(gradient.stops[i].s, gradient.stops[i].c);
    }
    return grad;
};

function animateSky() {
    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = newRadialGradient({
        x1: mX,
        y1: mY,
        r1: 0,
        r2: width,
        stops: [
            {s: 0, c: "rgba("+ (height - mY) +","+ (height - mY) +","+ (height - mY) +" ,0.5)"},
            {s: 0.05, c: "rgba("+ (height - mY) +","+ (height - mY-128) +", 100, 0.5)"},
            {s: 1, c: "rgba(0,"+ (height - mY - 128) +","+ (height- mY) +", 0.5)"}
        ]
    });
    ctx.fillRect(0, 0, width, height);
};