function printMessage(){
	let word1 = "magic";
	let word2 = "spell";
	let num1 = 12;
	let num2 = 13;
	let doubleWord = word1.concat(word2);
	let multiply = num1 * num2;
	let divide = num2/num1;
	let add = num1 + num2;
	let subtract = num1 - num2;
	//Print the messages 
	console.clear();
	console.log("Hi I'm the Console");
	console.log("Word1: " + word1 + "   Word2: " + word2);
	console.log("Double Word:  " + doubleWord);
	console.log("Num1: " + num1 + "   Num2: " + num2);
	console.log("Multiply: " + multiply + "   Divide: " + divide);
	console.log("Add: " + add + "   Subtract: " + subtract);
	console.log("Bye...");
}