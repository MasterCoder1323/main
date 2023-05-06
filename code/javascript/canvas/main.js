var drawBoard = document.getElementById("myCanvas");
var ctx = drawBoard.getContext("2d");
var color = document.getElementById("color").value;
var width = document.getElementById("width-of-line").value;
var mouseEvent = "empty";
var lastXpos, lastYpos, currentXpos, currentYpos;
drawBoard.addEventListener("mousedown", myMouseDown);
drawBoard.addEventListener("mouseup", myMouseUp);
drawBoard.addEventListener("mousemove", myMouseMove);
function myMouseDown(e) {
    var color = document.getElementById("color").value;
    var width = document.getElementById("width-of-line").value;
    mouseEvent = "mousedown";
}
function myMouseUp(e) {
    var color = document.getElementById("color").value;
    var width = document.getElementById("width-of-line").value;
    mouseEvent = "mouseup";
}
function myMouseMove(e) {
	currentXpos = e.clientX - drawBoard.offsetLeft;
	currentYpos = e.clientY - drawBoard.offsetTop;
	if(mouseEvent == "mousedown"){
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = width;
		console.log("Last X and Y positions are: ");
		console.log("x= " + lastXpos + " *** y= " + lastYpos);
		ctx.moveTo(lastXpos, lastYpos);
		console.log("Current X and Y positions are: ");
		console.log("x= " + currentXpos + " *** y= " + currentYpos);
		ctx.lineTo(currentXpos, currentYpos);
		ctx.stroke();
	}
	lastXpos = currentXpos;
	lastYpos = currentYpos;
}
function saveCanvas() {
	var dataURL = drawBoard.toDataURL("image/png");
	var dLink = document.getElementById("download-link");
	dLink.href = dataURL;
	dLink.style.display = "inline-block";
}