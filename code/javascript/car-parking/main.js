//Create a reference for canvas 
var canvas = new jcanvas("parkingLot","parkingLot.jpg");
//Initialize the car
var car = new jsprite(5,255,75,100,"car2.png",canvas)

//Move the Car
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car.up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			car.down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			car.left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			car.right();
			console.log("right");
		}
		
		
}
