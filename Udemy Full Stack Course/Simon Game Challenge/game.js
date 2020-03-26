var randomNumber = Math.floor(Math.random()*3)  
var buttonColors = ["red","blue","green","yellow"]

var isStarted = false
var userClickedPattern = []
var gameArray = []
var level = 0

var randomChosenColor = buttonColors[randomNumber]
gameArray.push(randomChosenColor)

gamePlay(randomChosenColor);

function gamePlay(randomChosenColor){
    if (isStarted){
    blinkRandomButton(randomChosenColor);
    }
}

function blinkRandomButton(randomChosenColor){
        var chosenButton = $(".btn"+randomChosenColor)
        console.log(chosenButton);
        chosenButton.fadeOut(150).fadeIn(150);

}

// Detect keypress to start the game.
    $(document).keypress(function(event){
      nextSequence(event);

    })

function nextSequence(event){
    if (!isStarted){
        $("#level-title").text("Level "+level);
        isStarted = true
    }
}


// Detect mouse click on any of the 4 buttons. Animate the mouse click plus play the associated sound.
$(".btn").click(function(){
    //console.log(this.id);
    animatePress(this)
    //$(this).fadeOut(150).fadeIn(150);
    playSound(this.id)
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

})

function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function animatePress(currentColor){
   // console.log(currentColor)
    $(currentColor).addClass("pressed");
    setTimeout(function(){
        $(currentColor).removeClass("pressed");   
    },50)
}


