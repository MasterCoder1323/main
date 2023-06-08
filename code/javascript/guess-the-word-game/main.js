var player1, player2;
player1 = {
    name: "text",
    score: 0
}
player2 = {
    name: "text",
    score: 0
}
function getData(){
    if(localStorage.getItem("player1Name") !== null && localStorage.getItem("player2Name") !== null){
        player1.name = localStorage.getItem("player1Name");
        player2.name = localStorage.getItem("player2Name");
        if (localStorage.getItem("player1Score") !== null && localStorage.getItem("player2Score") !== null) {
            player1.score = localStorage.getItem("player1Score");
            player2.score = localStorage.getItem("player2Score");
        }
    }else{
        window.location = "login.html";
    }
    document.getElementById("player1Name").innerHTML = player1.name;
    document.getElementById("player2Name").innerHTML = player2.name;
    document.getElementById("player1Score").innerHTML = player1.score;
    document.getElementById("player2Score").innerHTML = player2.score;
    document.getElementById("questionTurn").innerHTML = player2.name;
}
function save(){
    localStorage.setItem("player1Name", player1.name);
    localStorage.setItem("player2Name", player2.name);
    localStorage.setItem("player1Score", player1.score);
    localStorage.setItem("player2Score", player2.score);
}
function send() {
    console.log("send");
    let word = document.getElementById("wordInput").value
    word = word.toLowerCase();
    let halfOfWordLength = Math.floor(word.length / 2);
    let changedWord;
    for (let index = 1; index < halfOfWordLength; index++) {
        changedWord = word.replace(word.charAt(index * 2), "_");
        word = changedWord;
        console.log(word);
    }
    let questionHTML = "<h2>Word To Guess: </h2><span><h2 id='word'></h2></span> <br> <br>";
    let inputHTML = "<input type='text' id='answer' placeholder='Put Your Answer Here'> <br> <br> <button class='btn btn-success' onclick='reply();'> Enter</button>";
    let fullHTML = questionHTML.concat(inputHTML);
    document.getElementById("output").innerHTML = fullHTML;
    document.getElementById("word").innerHTML = word;
}