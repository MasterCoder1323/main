function jcanvas(id = "myCanvas", img){
    this.properties1 = document.getElementById(id);
    this.ctx = this.properties1.getContext("2d");
    this.backgroundIMG = img;
    this.backgroundTag = new Image();
    this.backgroundTag.src = this.backgroundIMG;
    this.backgroundTag.onload = this.start();
    this.start = function(){
        this.ctx.drawImage(this.backgroundTag,0,0,this.properties1.width, this.properties1.height);
    }
};
function jsprite(x,y,width,height,image, location){
    this.width = width;
    this.height = height;
    this.image = image;
    this.imageTag = null;
    this.x = x;
    this.y = y;
    this.canvas = location;
    this.start = function(){
        this.imageTag = new Image();
        this.imageTag.src = this.image;
        this.imageTag.onload = this.draw();
    },
    this.draw = function(){
        this.canvas.ctx.drawImage(this.imageTag,this.x,this.y,this.width,this.height);
    },
    this.up = function(px = 10){
        if(this.y >=0){
            this.y = this.y - px;
        }
        this.draw();
    },
    this.down = function(px = 10){
        if(this.y <=this.canvas.canvas.height){
            this.y = this.y + px;
        }
        this.draw();
    },
    this.left = function(px = 10){
        if(this.x >=0){
            this.x = this.x - px;
        }
        this.draw();
    },
    this.right = function(px = 10){
        if(this.x <=canvas1.width){
            this.x = this.x + px;
        }
        this.draw();
    }
}
