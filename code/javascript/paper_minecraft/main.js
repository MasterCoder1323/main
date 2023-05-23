var canvas = new fabric.canvas("myCanvas");
var player = {
    img: "player.png",
    Image: null,
    width:150,
    height:140,
    x: 10,
    y: 10,
    draw: function(){
        fabric.Image.fromURL(this.img,function(Img){
            this.Image = Img;
            this.Image.scaleToWidth(this.width);
            this.Image.scaleToHeight(this.height);
            this.Image.set({
                top: this.x,
                left: this.y
            });
            canvas.add(this.Image);
        });
    }
}
var move = {
    Up:function(){

    },
    Down:function(){

    },
    Left:function(){

    },
    Right:function(){

    }
}
var blockInfo = {
    width:30,
    height:30,
    currentImg: "ground.png"
}
var blockImage;
function addBlock(x,y){
    fabric.Image.fromURL(blockInfo.currentImg,function(Img){
        blockImage = Img;
        blockImage.scaleToWidth(blockInfo.width);
        blockImage.scaleToHeight(blockInfo.height);
        blcoImage.set({
            top: x,
            left: y
        });
        canvas.add(blockImage);
    });
}
window.addEventListener("keydown", minecraftKeyPress);
function minecraftKeyPress(e){
    var keyCode = e.keyCode;
    console.log(keyCode);
    //block editing keys
    if (e.shiftKey && keyCode == "189") {
        blockInfo.width = blockInfo.width - 5;
        blockInfo.height = blockInfo.height - 5;
        console.log("Block size redused to: "+blockInfo.width);
    }
    if (e.shiftKey && keyCode == "187") {
        blockInfo.width = blockInfo.width + 5;
        blockInfo.height = blockInfo.height + 5;
        console.log("Block size incresed to: "+blockInfo.width);
    }
    if (keyCode == "13") {
        placeBlock();
        console.log("Block Placed!");
    }
    //moving keys
    if (keyCode == "38") {
        move.Up();
        console.log("Player went Up");
    }
    if (keyCode == "40") {
        move.Down();
        console.log("Player went Down");
    }
    if (keyCode == "37") {
        move.Left();
        console.log("Player went Left");
    }
    if (keyCode == "39") {
        move.Right();
        console.log("Player went Right");
    }
    //block image keys
    if (keyCode == "49") {
        blockInfo.currentImg = "ground.png";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "50") {
        blockInfo.currentImg = "cloud.jpg";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "51") {
        blockInfo.currentImg = "yellow_wall.png";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "52") {
        blockInfo.currentImg = "roof.jpg";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "53") {
        blockInfo.currentImg = "dark_green.png";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "54") {
        blockInfo.currentImg = "light_green.png";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "55") {
        blockInfo.currentImg = "wall.jpg";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "56") {
        blockInfo.currentImg = "trunk.jpg";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
    if (keyCode == "57") {
        blockInfo.currentImg = "unique.png";
        console.log("Block type set to: "+blockInfo.currentImg);
    }
}