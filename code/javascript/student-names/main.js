var studentArray = [];
var arrayNoCommas = [];
var greenArray = [];
var redArray = [];
function getName(num){
    var name = document.getElementById("name_of_the_student_" + num).value;
    return name;
}
function submit(){
    var pushname = getName(1);
    studentArray.push(pushname); 
    console.log(studentArray);
    greenArray = [];
    redArray = [];
    for (let i = 0; i < studentArray.length; i++) {
        greenArray.push("<h4>Name - "+studentArray[i]+"</h4>");
    }
    redArray = greenArray.join(" "); 
    document.getElementById("display_name_with_commas").innerHTML = greenArray;
    document.getElementById("display_name_without_commas").innerHTML = redArray;
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    studentArray.sort();
    greenArray = [];
    redArray = [];
    for (let i = 0; i < studentArray.length; i++) {
        greenArray.push("<h4>Name - "+studentArray[i]+"</h4>");
    }
    redArray = greenArray.join(" "); 
    document.getElementById("display_name_with_commas").innerHTML = greenArray;
    document.getElementById("display_name_without_commas").innerHTML = redArray;
    document.getElementById("sort_button").style.display = "inline-block";
}
