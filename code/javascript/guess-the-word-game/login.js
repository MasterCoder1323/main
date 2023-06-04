function addUser(){
    let player1Name = document.getElementById("player1NameInput").value;
    let player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);
    window.location = "index.html";
}
function checkLogin(){
    if(localStorage.getItem("player1Name") !== null && localStorage.getItem("player2Name") !== null){
        window.location = "index.html";
    }
}