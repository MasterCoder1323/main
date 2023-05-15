var drawBoard = document.getElementById("myCanvas");
var ctx = drawBoard.getContext("2d");
var color = document.getElementById("color").value;
var width = document.getElementById("width-of-line").value;
var mouseEvent = "empty";
var lastXpos, lastYpos, currentXpos, currentYpos;
var computer;
if(screen.width < 700 && screen.height < 1000){
	drawBoard.addEventListener("touchdown", myMouseDown);
	drawBoard.addEventListener("touchup", myMouseUp);
	drawBoard.addEventListener("touchmove", myMouseMove);
	drawBoard.width = screen.width - 70;
	drawBoard.height = screen.height - 300;
	computer=false;
}else{
	drawBoard.addEventListener("mousedown", myMouseDown);
	drawBoard.addEventListener("mouseup", myMouseUp);
	drawBoard.addEventListener("mousemove", myMouseMove);
	computer=true;
}
function myMouseDown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width-of-line").value;
    mouseEvent = "mousedown";
}
function myMouseUp(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width-of-line").value;
    mouseEvent = "mouseup";
}
function myMouseMove(e) {
	if(computer){
		currentXpos = e.clientX - drawBoard.offsetLeft;
		currentYpos = e.clientY - drawBoard.offsetTop;
	}else{
		currentXpos = e.touches[0].clientX - drawBoard.offsetLeft;
		currentYpos = e.touches[0].clientY - drawBoard.offsetTop;
	}
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
function clearCanvas(){
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}