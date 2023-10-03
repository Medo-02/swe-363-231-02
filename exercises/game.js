
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(".btn").click( function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});

function nextSequence() {
    randomNumber1 = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber1];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).animate({opacity: 0.5}).animate({opacity: 1});
    level++;
    $("h1").text("Level "+level);
}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    console.log(buttonColours[currentLevel]);
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success");
    }else {
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)
        $("h1").text("game over press any key to restart ");
        startOver();
    }
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        }, 1000);
        userClickedPattern = [];
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}