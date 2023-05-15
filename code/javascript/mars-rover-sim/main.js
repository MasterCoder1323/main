var canvas1 = document.getElementById('myCanvas');
var ctx = canvas1.getContext("2d");
var rover = {
    width:100,
    height:90,
    x:10,
    y:10,
    image:"rover.png",
    imageTag:null,
    start: function(){
        this.imageTag = new Image();
        this.imageTag.src = this.image;
        this.imageTag.onload = this.draw();
    },
    draw: function(){
        ctx.drawImage(this.imageTag,this.x,this.y,this.width,this.height);
    },
    up: function(px = 10){
        if(this.y >=0){
            this.y = this.y - px;
        }
        this.draw();
    },
    down: function(px = 10){
        if(this.y <=canvas1.height){
            this.y = this.y + px;
        }
        this.draw();
    },
    left: function(px = 10){
        if(this.x >=0){
            this.x = this.x - px;
        }
        this.draw();
    },
    right: function(px = 10){
        if(this.x <=canvas1.width){
            this.x = this.x + px;
        }
        this.draw();
    }
};
var backgroundImage = "mars.jpg";
var backgroundImageTag;
function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;
    rover.start();
}
function uploadBackground(){
    ctx.drawImage(backgroundImageTag,0,0,canvas1.width,canvas1.height);
}
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