//Import Libraries
import fabric from "./fabric.js"
//Functions
function jFabric(id = "myCanvas", backgroundImg = "imgName"){
    this.properties1 = document.getElementById(id);
    this.ctx = this.properties1.getContext("2d");
    this.fabric = fabric.canvas(id);
    if(backgroundImg !== null){
    	this.addImage(0,0,this.properties1.width,this.properties1.height,backgroundImg,this)
    }
	this.addImage = function(x = 10,y = 10,width = 100,height = 100,url = URL) {
		fabric.Image.fromURL(url,function(Img){
			var Image = Img;
			Image.scaleToWidth(width);
			Image.scaleToHeight(height);
			Image.set({
				top: x,
				left: y
			});
			this.fabric.add(Image);
		});
	}
};
function jSprite(x = 0,y = 0,width = 100,height = 100,image = "img", location = jFabric){
    this.width = width;
    this.height = height;
    this.image = image;
    this.x = x;
    this.y = y;
	this.canvas = location.properties1;
    this.fabric = location.fabric;
    this.draw = function(){
        fabric.Image.fromURL(this.img,function(Img){
            this.Image = Img;
            this.Image.scaleToWidth(this.width);
            this.Image.scaleToHeight(this.height);
            this.Image.set({
                top: this.x,
                left: this.y
            });
            this.fabric.add(this.Image);
        });
    }
    this.up = function(px = 10){
        if(this.y >=0){
            this.y = this.y - px;
        }
        this.draw();
    },
    this.down = function(px = 10){
        if(this.y <=this.canvas.height){
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
        if(this.x <=this.canvas.width){
            this.x = this.x + px;
        }
        this.draw();
    }
}

