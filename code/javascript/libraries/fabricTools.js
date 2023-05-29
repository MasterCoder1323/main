//Imports


//Functions
const jFabric = {
    canvas: function(id, backgroundImg) {
        this.properties1 = document.getElementById(id);
        this.ctx = this.properties1.getContext("2d");
        this.fabric = fabric.canvas(id);
        if (backgroundImg !== null) {
            this.addImage(0, 0, this.properties1.width, this.properties1.height, backgroundImg, this)
        }
        this.addImage = function(x = 10, y = 10, width = 100, height = 100, url = URL) {
            fabric.Image.fromURL(url, function(Img) {
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
    },
    sprite: function(x, y, width, height, image, location = jFabric, idNum = 10) {
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = x;
        this.y = y;
        this.canvas = location.properties1;
        this.fabric = location.fabric;
        this.location = location
        this.spriteID = "sprite_" + idNum
        this.draw = function() {
            this.fabric.remove(this.spriteID);
            fabric.Image.fromURL(url, function(Img) {
                var Image = Img;
                Image.scaleToWidth(width);
                Image.scaleToHeight(height);
                Image.set({
                    top: x,
                    left: y
                });
                this.spriteID = Image;
                this.fabric.add(this.spriteID);
            });
        }
        this.up = function(px = 10) {
                if (this.y >= 0) {
                    this.y = this.y - px;
                }
                this.draw();
            },
            this.down = function(px = 10) {
                if (this.y <= this.canvas.height) {
                    this.y = this.y + px;
                }
                this.draw();
            },
            this.left = function(px = 10) {
                if (this.x >= 0) {
                    this.x = this.x - px;
                }
                this.draw();
            },
            this.right = function(px = 10) {
                if (this.x <= this.canvas.width) {
                    this.x = this.x + px;
                }
                this.draw();
            }
    }
};

export { jFabric }
/*
To Import add:
	
*/