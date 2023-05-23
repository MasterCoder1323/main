var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        var Iobject;
        Iobject = Img;
        Iobject.scaleToWidth(700);
        Iobject.scaleToHeight(510);
        Iobject.set({
            top:0,
            left:0
        });
        canvas.add(Iobject)
    });
	
}

function playSound(){
	x.play();
}
