var canvas = document.getElementById("circle-canvas");
var ctx = canvas.getContext("2d");
var color = "magenta";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400,300,10,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mouseDown",my_mouseDown);
function my_mouseDown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    mymouse.x = e.clientX-canvas.offsetLeft;
    mymouse.y = e.clientY-canvas.offsetTop;
    console.log("X:" + mymouse.x + ", Y: " + mymouse.y);
    circle(mymouse.x, mymouse.y);
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
function circle(x,y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();
}