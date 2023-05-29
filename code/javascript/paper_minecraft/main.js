//Code
var canvas = new jFabric.canvas("myCanvas");
var player = new jFabric.sprite(10, 10, 140, 150, "player.png", canvas, "player");
player.draw();
var blockInfo = {
    width: 30,
    height: 30,
    currentImg: "ground.png"
}

function addBlock(x, y) {
    canvas.addImage(x, y, blockInfo.width, blockInfo.height, blockInfo.currentImg);
}
window.addEventListener("keydown", minecraftKeyPress);

function minecraftKeyPress(e) {
    var keyCode = e.keyCode;
    console.log(keyCode);
    //block editing keys
    if (e.shiftKey && keyCode == "189") {
        blockInfo.width = blockInfo.width - 5;
        blockInfo.height = blockInfo.height - 5;
        console.log("Block size redused to: " + blockInfo.width);
    }
    if (e.shiftKey && keyCode == "187") {
        blockInfo.width = blockInfo.width + 5;
        blockInfo.height = blockInfo.height + 5;
        console.log("Block size incresed to: " + blockInfo.width);
    }
    if (keyCode == "13") {
        placeBlock();
        console.log("Block Placed!");
    }
    //moving keys
    if (keyCode == "38") {
        player.up(10);
        console.log("Player went Up");
    }
    if (keyCode == "40") {
        player.down(10);
        console.log("Player went Down");
    }
    if (keyCode == "37") {
        player.left(10);
        console.log("Player went Left");
    }
    if (keyCode == "39") {
        player.right(10);
        console.log("Player went Right");
    }
    //block image keys
    if (keyCode == "49") {
        blockInfo.currentImg = "ground.png";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "50") {
        blockInfo.currentImg = "cloud.jpg";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "51") {
        blockInfo.currentImg = "yellow_wall.png";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "52") {
        blockInfo.currentImg = "roof.jpg";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "53") {
        blockInfo.currentImg = "dark_green.png";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "54") {
        blockInfo.currentImg = "light_green.png";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "55") {
        blockInfo.currentImg = "wall.jpg";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "56") {
        blockInfo.currentImg = "trunk.jpg";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
    if (keyCode == "57") {
        blockInfo.currentImg = "unique.png";
        console.log("Block type set to: " + blockInfo.currentImg);
    }
}