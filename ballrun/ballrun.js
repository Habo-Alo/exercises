var ball = document.querySelector("#ball");
var left =0;
ball.style.left = left + "px";

function move() {
  left=left+10;
  ball.style.left = left + "px";
}
