function buttonFunction(){
 	let ansQuestionOne = document.querySelector("#ninetyFive").checked;
	let ansQuestionTwo = document.getElementById("questionTwo").value;
	let ansQuestionThree = document.getElementById("questionThree").value;
	let questionThreeOptionOne = document.querySelector("#print").checked;
	let questionThreeOptionTwo = document.querySelector("#input").checked;
	let questionThreeOptionThree = document.querySelector("#output").checked;
	let questionThreeOptionFour = document.querySelector("#let").checked;
	let questionFiveAnswerOne = document.getElementById("questionFiveAnswerOne").innerHTML;
	let questionFiveAnswerTwo = document.getElementById("questionFiveAnswerTwo").innerHTML;
	let questionFiveAnswerThree = document.getElementById("questionFiveAnswerThree").innerHTML;
	let questionFiveAnswerFour = document.getElementById("questionFiveAnswerFour").innerHTML;
	let questionSixAnswerOne = document.getElementById("questionSixAnswerOne").innerHTML;
	let questionSixAnswerTwo = document.getElementById("questionSixAnswerTwo").innerHTML;
	let questionSixAnswerThree = document.getElementById("questionSixAnswerThree").innerHTML;
	let questionSixAnswerFour = document.getElementById("questionSixAnswerFour").innerHTML;
	
	let score=0;
	if(ansQuestionOne) {
		score = score+1;
	} if(ansQuestionTwo) {
		score = score+1;
	} if(ansQuestionThree) {
		score = score+1;
	} if(questionThreeOptionOne) {
		score = score+2;
	} if(questionThreeOptionTwo) {
		score = score+2;
	} if(questionThreeOptionOne | questionThreeOptionTwo && questionThreeOptionThree | questionThreeOptionFour) {
		score = score-2;
	} if(questionThreeOptionOne && questionThreeOptionTwo && questionThreeOptionThree && questionThreeOptionFour) {
		score = score-2;
	} if(questionFiveAnswerOne == "d. 90") {
		score = score+1;
	} if(questionFiveAnswerTwo == "a. 70") {
		score = score+1;
	} if(questionFiveAnswerThree == "b. 105") {
		score = score+1;
	} if(questionFiveAnswerFour == "c. 150"){
		score = score+1;
	} if(questionSixAnswerOne == "300") {
		score = score+1;
	} if(questionSixAnswerTwo == "92") { 
		score = score+1;
	} if(questionSixAnswerThree == "54") {
		score = score+1;
	} if(questionSixAnswerFour == "41") {
		score = score+1;
	}
	if (score>= 15) {
		document.getElementsByTagName("p")[10].innerHTML = `<b>You got everything right, good for you ${score}/15</b>`;
	} else if(score>=7) {
		document.getElementsByTagName("p")[10].innerHTML = `<b>You can do better, ${score}/15</b>`;
	} else if (score<=7) {
		document.getElementsByTagName("p")[10].innerHTML = `<b>Even my grandma can do better than you, ${score}/15</b>`;
	}
	
	document.getElementById("correctAnswerQuestion1").innerHTML = "<b>95(correct answer)</b>";
	document.getElementById("correctAnswerQuestion2").innerHTML = "<b>110(correct answer)</b>";
	document.getElementById("correctAnswerQuestion3").innerHTML = "<b>100(correct answer)</b>";
	document.getElementsByClassName("correctAnswerQuestion4")[0].innerHTML = "<b>print()(correct answer)</b>";
	document.getElementsByClassName("correctAnswerQuestion4")[1].innerHTML = "<b>input()(correct answer)</b>";
 	document.getElementsByClassName("correctAnswerQuestion5")[0].innerHTML = "<b>a. 70 </b>";
	document.getElementsByClassName("correctAnswerQuestion5")[1].innerHTML = "<b>b. 105 </b>";
	document.getElementsByClassName("correctAnswerQuestion5")[2].innerHTML = "<b>c.150 </b>";
	document.getElementsByClassName("correctAnswerQuestion5")[3].innerHTML = "<b>d. 90 (correct answer)</b>";
	document.getElementsByClassName("correctAnswerQuestion6")[0].innerHTML = "<b>300(correct order)</b>";
	document.getElementsByClassName("correctAnswerQuestion6")[1].innerHTML = "<b>92(correct order)</b>";
	document.getElementsByClassName("correctAnswerQuestion6")[2].innerHTML = "<b>54(correct order)</b>";
	document.getElementsByClassName("correctAnswerQuestion6")[3].innerHTML = "<b>41(correct order)</b>";
}

let leftRow = "";
function leftRowFunction(x){
	if(x == 1) {
		leftRow = document.getElementById("questionFiveChoiceOne").innerHTML.substring(0,3);
	} else if (x == 2) {
		leftRow = document.getElementById("questionFiveChoiceTwo").innerHTML.substring(0,3);
	} else if (x == 3) {
		leftRow = document.getElementById("questionFiveChoiceThree").innerHTML.substring(0,3);
	} else if (x == 4) {
		leftRow = document.getElementById("questionFiveChoiceFour").innerHTML.substring(0,3);
	}
}

function rightRowFunction(x){
	if(x == 1) {
		document.getElementById("questionFiveAnswerOne").innerHTML = `${leftRow}90`;
	} else if (x == 2) {
		document.getElementById("questionFiveAnswerTwo").innerHTML = `${leftRow}70`;
	} else if (x == 3) {
		document.getElementById("questionFiveAnswerThree").innerHTML = `${leftRow}105`;
	} else if (x == 4) { 
		document.getElementById("questionFiveAnswerFour").innerHTML = `${leftRow}150`;
	}
	leftRow = "";
}

let primary = 0;
let secondary = 0;
let	primaryNumber = "";
let secondaryNumber = "";
function swapFunction(x){
	if(primary == 0 && x == 1) {
		primary = document.getElementById("questionSixAnswerOne").innerHTML;
		primaryNumber = "One";
	} else if(primary == 0 && x == 2) {
		primary = document.getElementById("questionSixAnswerTwo").innerHTML;
		primaryNumber = "Two";
	} else if(primary == 0 && x == 3) {
		primary = document.getElementById("questionSixAnswerThree").innerHTML;
		primaryNumber = "Three";
	} else if(primary == 0 && x == 4) {
		primary = document.getElementById("questionSixAnswerFour").innerHTML;
		primaryNumber = "Four";
	} else if(primary != 0 && secondary == 0 && x == 1) {
		secondary = document.getElementById("questionSixAnswerOne").innerHTML;
		secondaryNumber = "One";
		swapText(primaryNumber,secondaryNumber);
		primary = 0;
		secondary = 0;
	} else if(primary != 0 && secondary == 0 && x == 2) {
		secondary = document.getElementById("questionSixAnswerTwo").innerHTML;
		secondaryNumber = "Two";
		swapText(primaryNumber,secondaryNumber);
		primary = 0;
		secondary = 0;
	} else if(primary != 0 && secondary == 0 && x == 3) {
		secondary = document.getElementById("questionSixAnswerThree").innerHTML;
		secondaryNumber = "Three";
		swapText(primaryNumber,secondaryNumber);
		primary = 0;
		secondary = 0;
	} else if(primary != 0 &&secondary == 0 && x == 4) {
		secondary = document.getElementById("questionSixAnswerFour").innerHTML;
		secondaryNumber = "Four";
		swapText(primaryNumber,secondaryNumber);
		primary = 0;
		secondary = 0;
	}
}

function swapText(x,y){
	document.getElementById(`questionSixAnswer${y}`).innerHTML = `${primary}`;
	document.getElementById(`questionSixAnswer${x}`).innerHTML = `${secondary}`;
}
