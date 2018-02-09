//declared an object containing my two players
var game = {
    player1: { scoreBoard: $("#p1-score-count"), gameBoard: $("#p1-misses-count")},
    player2: { scoreBoard: $("#p2-score-count"), gameBoard: $("#p2-misses-count")}
}

game.currentPlayer = game.player1

//array for multiple words
//declaring global variables
var displayedWords = ["why", "is", "this", "not", "functioning", "properly", "slipped", "slope", "slow", "slowly", "small", "smaller", "smallest", "smell", "pretty", "prevent", "previous", "price", "pride", "primitive", "principal", "principle", "advice", "affect", "afraid", "after", "afternoon", "again", "against", "age", "business", "busy", "but", "butter", "buy", "by", "cabin", "cage"]
var $word1 = $("#word1");
var $word2 = $("#word2");
var $word3 = $("#word3");
var $word4 = $("#word4");
var $word5 = $("#word5");
var $word6 = $("#word6");
var $inputField = $("#input-field")

//functionality to randomly choose words from array to display
function randomInt(n) {
    return Math.floor( Math.random() * n)
}

var newWord = randomInt(displayedWords.length);
var newDW1 = displayedWords[newWord];               //newDW = new Displayed Word
$word1.text(newDW1);

var newWord2 = randomInt(displayedWords.length);
var newDW2 = displayedWords[newWord2];
$word2.text(newDW2);

var newWord3 = randomInt(displayedWords.length);
var newDW3 = displayedWords[newWord3];
$word3.text(newDW3);

var newWord4 = randomInt(displayedWords.length);
var newDW4 = displayedWords[newWord4];
$word4.text(newDW4);

var newWord5 = randomInt(displayedWords.length);
var newDW5 = displayedWords[newWord5];
$word5.text(newDW5);

var newWord6 = randomInt(displayedWords.length);
var newDW6 = displayedWords[newWord6];
$word6.text(newDW6);

//functionality to check player input and add score
var score = 0

function checkMatch(e) {
    if(e.keyCode === 13){
        var inputWord = $("#input-field").val()
        
        if (inputWord === newDW1 || inputWord === newDW2 || inputWord === newDW3 || inputWord === newDW4 || inputWord === newDW5 || inputWord === newDW6) {
            score = score + 1;
            game.currentPlayer.scoreBoard.text(score)
            changeWordOnMatch(e)
                
            }
            $inputField.val("")
                      }
                    
                }
document.querySelector("#input-field").addEventListener("keydown", checkMatch)

//functionality to change words when typing matches
function changeWordOnMatch(e) {
    if(e.keyCode === 13){
        var inputValue = $inputField.val()
   
        if (inputValue === newDW1) {
            newWord = randomInt(displayedWords.length);
            newDW1 = displayedWords[newWord];
            $word1.text(newDW1)
            $word1.css({marginLeft: "0px"})

        } else if (inputValue === newDW2) {
            newWord = randomInt(displayedWords.length);
            newDW2 = displayedWords[newWord];
            $word2.text(newDW2)
            $word2.css({marginLeft: "0px"})

        } else if (inputValue === newDW3) {
            newWord = randomInt(displayedWords.length);
            newDW3 = displayedWords[newWord];
            $word3.text(newDW3)
            $word3.css({marginLeft: "0px"})

        } else if (inputValue === newDW4) {
            newWord = randomInt(displayedWords.length);
            newDW4 = displayedWords[newWord];
            $word4.text(newDW4)
            $word4.css({marginLeft: "0px"})

        } else if (inputValue === newDW5) {
            newWord = randomInt(displayedWords.length);
            newDW5 = displayedWords[newWord];
            $word5.text(newDW5)
            $word5.css({marginLeft: "0px"})

        } else if (inputValue === newDW6) {
            newWord = randomInt(displayedWords.length);
            newDW6 = displayedWords[newWord];
            $word6.text(newDW6)
            $word6.css({marginLeft: "0px"})
        } 
                    } }
document.querySelector("#input-field").addEventListener("keydown", changeWordOnMatch)

// functionality to check for winner and display the winner
function checkWinner () {
    if (parseInt(game.player1.scoreBoard.text())> parseInt(game.player2.scoreBoard.text())) {
        alert("Player 1 wins with: " + game.player1.scoreBoard.text() +  "points. " + "But you missed: " + game.player1.gameBoard.text() + " words")
    } else if (parseInt(game.player2.scoreBoard.text())> parseInt(game.player1.scoreBoard.text())) {
        alert("Player 2 wins with: " + game.player2.scoreBoard.text() + "points. " + "But you missed: " + game.player2.gameBoard.text() + " words")
    } else {
        alert ("We have a tie, reload to play again")
    }

} 

//functionality for timer
var timeCount = $("#time-count");
var time = 20;
var time2 = 18;
var p2Turn;
var waitForYes;

var timer = setInterval(countDown, 1000)

function stopTimer () {
    clearInterval(timer);
    timeCount.text(time) }



//functionality to count down time for player1, switch to player 2
function countDown() {
    time = time - 1;
    timeCount.text(time);

        if (time === 0 && game.currentPlayer === game.player1) {
            stopTimer();

            clearInterval(word1Move);
            $word1.css({marginLeft: "0px"});

            clearInterval(word2Move);
            $word2.css({marginLeft: "0px"});

            clearInterval(word3Move);
            $word3.css({marginLeft: "0px"});
            
            clearInterval(word4Move);
            $word4.css({marginLeft: "0px"});

            clearInterval(word5Move);
            $word5.css({marginLeft: "0px"});

            clearInterval(word6Move);
            $word6.css({marginLeft: "0px"}); 
            
            switchPlayer();
        } else if (time === 0) {
            endGame()
            checkWinner()
        }
            
            
        }

//switch players function
function switchPlayer() {

    p2Turn = prompt("Are you ready p2?");
    

    while (p2Turn !== "yes" && waitForYes !== "yes") {
        waitForYes = prompt("We will wait for a yes")
    }

    if(p2Turn === "yes" || waitForYes === "yes") {
        time = 20
        score = 0
        misses = 0
        game.currentPlayer = game.player2
        timer = setInterval(countDown, 1000)

         word1Move = setInterval(moveNSpeed.move1Fn, 20);
         word2Move = setInterval(moveNSpeed.move2Fn, 24);
         word3Move = setInterval(moveNSpeed.move3Fn, 28);
         word4Move = setInterval(moveNSpeed.move4Fn, 32);
         word5Move = setInterval(moveNSpeed.move5Fn, 36);
         word6Move = setInterval(moveNSpeed.move6Fn, 40);

         
    }

}

// end game function
function endGame () {
    if (time === 0) {
        clearInterval(word1Move);
            $word1.css({marginLeft: "0px"});

            clearInterval(word2Move);
            $word2.css({marginLeft: "0px"});

            clearInterval(word3Move);
            $word3.css({marginLeft: "0px"});
            
            clearInterval(word4Move);
            $word4.css({marginLeft: "0px"});

            clearInterval(word5Move);
            $word5.css({marginLeft: "0px"});

            clearInterval(word6Move);
            $word6.css({marginLeft: "0px"});
            stopTimer()
       
    }
}


//if word is untyped and reaches end of screen, delete and fire off new one and track count of misses
var misses = 0


function missHit1 () {
    newWord = randomInt(displayedWords.length)
    newDW1 = displayedWords[newWord]
    $word1.text(newDW1) }

function missHit2() {
    newWord = randomInt(displayedWords.length)
    newDW2 = displayedWords[newWord]
    $word2.text(newDW2) }

function missHit3() { 
    newWord = randomInt(displayedWords.length)
    newDW3 = displayedWords[newWord]
    $word3.text(newDW3) }

function missHit4() { 
    newWord = randomInt(displayedWords.length)
    newDW4 = displayedWords[newWord]
    $word4.text(newDW4) }

function missHit5() { 
    newWord = randomInt(displayedWords.length)
    newDW5 = displayedWords[newWord]
    $word5.text(newDW5) }

function missHit6() { 
    newWord = randomInt(displayedWords.length)
    newDW6 = displayedWords[newWord]
    $word6.text(newDW6) }

//functionality to move words at different speeds and called the missed words counting function

    var moveNSpeed = {

        wordSpeed: [3, 3.5, 4, 4.5, 5, 5.5],
        
        
        move1Fn: function () {
            $word1.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word1.css("marginLeft")) > 600){
                missHit1();
                if (time > 0) {
                    misses = misses + 1;
                    game.currentPlayer.gameBoard.text(misses)
                    $word1.css({marginLeft: "0px"})
                }
                 
            }
        },
        
        move2Fn: function () {
            $word2.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word2.css("marginLeft")) > 600){
                missHit2();
                if (time > 0) {
                    misses = misses + 1;
                    game.currentPlayer.gameBoard.text(misses)
                    $word2.css({marginLeft: "0px"})
                }
                     
            }
        },
        
        move3Fn: function () {
            $word3.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word3.css("marginLeft")) > 600){
                missHit3();
                if (time > 0) {
                    misses = misses + 1;
                    game.currentPlayer.gameBoard.text(misses)
                    $word3.css({marginLeft: "0px"})
                }
                    
            }
        },
        
        move4Fn: function () {
            $word4.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word4.css("marginLeft")) > 600){
                missHit4();
                    if (time > 0) {
                        misses = misses + 1;
                        game.currentPlayer.gameBoard.text(misses)
                        $word4.css({marginLeft: "0px"})
                    }
                        
            }
        },
        
        move5Fn: function () {
            $word5.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word5.css("marginLeft")) > 600){
                missHit5();
                    if (time > 0) {
                        misses = misses + 1;
                        game.currentPlayer.gameBoard.text(misses)        
                        $word5.css({marginLeft: "0px"})
                    }
                    
            }
        },
        
        move6Fn: function () {
            $word6.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word6.css("marginLeft")) > 600){
                missHit6();
                    if (time > 0) {
                        misses = misses + 1;
                        game.currentPlayer.gameBoard.text(misses)
                        $word6.css({marginLeft: "0px"})
                    }
                     
            }
        } 
    }
        
        var word1Move = setInterval(moveNSpeed.move1Fn, 20);
        var word2Move = setInterval(moveNSpeed.move2Fn, 24);
        var word3Move = setInterval(moveNSpeed.move3Fn, 28);
        var word4Move = setInterval(moveNSpeed.move4Fn, 32);
        var word5Move = setInterval(moveNSpeed.move5Fn, 36);
        var word6Move = setInterval(moveNSpeed.move6Fn, 40);

var startBtn = $("#start-btn")
var startScreen = $("#start-screen")
var gameScreen = $("#game-screen")
var start;

startBtn.on("click", startGame)
   
function startGame() {
    startScreen.hide();
    gameScreen.show();

}

if(startBtn.on() !== true) {
    gameScreen.hide()
    
}