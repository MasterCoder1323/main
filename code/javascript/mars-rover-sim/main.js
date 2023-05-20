var canvas = new jcanvas("myCanvas","mars.jpg");
var rover = new jsprite(10,10,100,90,"rover.png",canvas);
rover.start();
canvas.start();
window.addEventListener("keydown", moveRover);
function moveRover(e) {
    let keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == 38){
       rover.up(10); 
       console.log("up");
    }
    if(keyPressed == 40){
       rover.down(10); 
       console.log("down");
    }
    if(keyPressed == 37){
       rover.left(10); 
       console.log("left");
    }
    if(keyPressed == 39){
       rover.right(10); 
       console.log("right");
    }

}