$(document).ready(function(){
$("#answer").hide();
var eightBall = {};
eightBall.listOfAnswers = ["Maybe", "Signs point to Yes", "No", "Try again later"];

eightBall.shakeBall = function(question){
	var random = Math.random()*this.listOfAnswers.length;
	var value = Math.floor(random);
	var solution = this.listOfAnswers[value];
	$("#8ball").effect("shake");
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").text(solution);
	$("#answer").fadeIn(4000);
};

var query = function(){
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	$("#answer").hide();
	setTimeout(function(){
	var input = prompt("Ask about the future!");
	eightBall.shakeBall(input);
	}, 1000);
};

$("#questionButton").click(query);
});
