//array for multiple words
//declaring global variables
var displayedWords = ["why", "is", "this", "not", "functioning", "properly", "slipped", "slope", "slow", "slowly", "small", "smaller", "smallest", "smell", "pretty ", "prevent ", "previous ", "price ", "pride ", "primitive ", "principal ", "principle"]
var $word1 = $("#word1");
var $word2 = $("#word2");
var $word3 = $("#word3");
var $word4 = $("#word4");
var $word5 = $("#word5");
var $word6 = $("#word6");
var inputField = $("#input-field").val();

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

//functionality to check player1 input and add score
var p1ScoreCount = $("#p1-score-count")
var p2ScoreCount = $("#p2-score-count")
var p1Score = 0
var p2Score = 0

function checkMatch(e) {
    if(e.keyCode === 13){
        var inputWord = $("#input-field").val()
        
        if (inputWord === newDW1 || inputWord === newDW2 || inputWord === newDW3 || inputWord === newDW4 || inputWord === newDW5 || inputWord === newDW6) {
            p1Score = p1Score + 1;
            p1ScoreCount.text(p1Score)
            changeWordOnMatch(e)
                
            }
            inputField = $("#input-field").val("")
                      }
                    
                }
document.querySelector("#input-field").addEventListener("keydown", checkMatch)

//functionality to change words when typing matches
function changeWordOnMatch(e) {
    if(e.keyCode === 13){
        var inputField = $("#input-field").val()
   
        if (inputField === newDW1) {
            newWord = randomInt(displayedWords.length);
            newDW1 = displayedWords[newWord];
            $word1.text(newDW1)
            $word1.css({marginLeft: "0px"})

        } else if (inputField === newDW2) {
            newWord = randomInt(displayedWords.length);
            newDW2 = displayedWords[newWord];
            $word2.text(newDW2)
            $word2.css({marginLeft: "0px"})

        } else if (inputField === newDW3) {
            newWord = randomInt(displayedWords.length);
            newDW3 = displayedWords[newWord];
            $word3.text(newDW3)
            $word3.css({marginLeft: "0px"})

        } else if (inputField === newDW4) {
            newWord = randomInt(displayedWords.length);
            newDW4 = displayedWords[newWord];
            $word4.text(newDW4)
            $word4.css({marginLeft: "0px"})

        } else if (inputField === newDW5) {
            newWord = randomInt(displayedWords.length);
            newDW5 = displayedWords[newWord];
            $word5.text(newDW5)
            $word5.css({marginLeft: "0px"})

        } else if (inputField === newDW6) {
            newWord = randomInt(displayedWords.length);
            newDW6 = displayedWords[newWord];
            $word6.text(newDW6)
            $word6.css({marginLeft: "0px"})
        } 
                    } }
document.querySelector("#input-field").addEventListener("keydown", changeWordOnMatch)

//functionality for timer
var timeCount = $("#time-count");
var time = 20;
var time2 = 18;
var p2Turn;
var waitForYes;

var timer = setInterval(countDown, 1000)
var timer2;

function stopTimer () {
    clearInterval(timer);
    timeCount.text(time) }

function stopTimer2 () {
    clearInterval(timer2);
    timeCount.text(time2) }


//functionality to count down time for player1, switch to player 2, start a new countdown and track score for player 2
function countDown() {
    time = time - 1;
    timeCount.text(time);

        if (time === 0) {
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

                //functionality to switch player
                p2Turn = prompt("Are you ready p2?");
                

                while (p2Turn !== "yes" && waitForYes !== "yes") {
                    waitForYes = prompt("We will wait for a yes")
                }

                if(p2Turn === "yes" || waitForYes === "yes") {
                    timer2 = setInterval(countDownAgain, 1000)
                    function countDownAgain() {
                        time2 = time2 - 1
                        timeCount.text(time2);
                        if(time2 === 0) {
                            stopTimer2()
                            checkWinner()
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
                        }
                        
                    }
                    
                        moveNSpeed.move1Fn();
                        word1Move = setInterval(moveNSpeed.move1Fn, 20);

                        moveNSpeed.move2Fn();
                        word2Move = setInterval(moveNSpeed.move2Fn, 24);

                        moveNSpeed.move3Fn();
                        word3Move = setInterval(moveNSpeed.move3Fn, 28);

                        moveNSpeed.move4Fn();
                        word4Move = setInterval(moveNSpeed.move4Fn, 32);

                        moveNSpeed.move5Fn();
                        word5Move = setInterval(moveNSpeed.move5Fn, 36);

                        moveNSpeed.move6Fn();
                        word6Move = setInterval(moveNSpeed.move6Fn, 40);
                }
             

                            function checkMatch2(e) {
                                if(e.keyCode === 13){
                                    var inputWord2 = $("#input-field").val()
                                    
                                    if (inputWord2 === newDW1 || inputWord2 === newDW2 || inputWord2 === newDW3 || inputWord2 === newDW4 || inputWord2 === newDW5 || inputWord2 === newDW6) {
                                        
                                        p2Score = p2Score + 1;
                                        p2ScoreCount.text(p2Score)
                                        changeWordOnMatch(e);
                                    }
                                        inputField = $("#input-field").val("")
                                        
                                }
                                                
                            }
                                document.querySelector("#input-field").removeEventListener("keydown", checkMatch)
                                
                                document.querySelector("#input-field").addEventListener("keydown", checkMatch2)
        }
}

//if word is untyped and reaches end of screen, delete and fire off new one and track count of misses
var p1MissesCount = $("#p1-misses-count")
var p2MissesCount = $("#p2-misses-count")
var p1Misses = 0
var p2Misses = 0


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
                    p1Misses = p1Misses + 1;
                    p1MissesCount.text(p1Misses);
                    $word1.css({marginLeft: "0px"})
                }
                
                if((p2Turn === "yes" || waitForYes === "yes") && time2 > 0) {
                    p2Misses = p2Misses + 1;
                    p2MissesCount.text(p2Misses)
                    $word1.css({marginLeft: "0px"})
                }    
            }
        },
        
        move2Fn: function () {
            $word2.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word2.css("marginLeft")) > 600){
                missHit2();
                if (time > 0) {
                    p1Misses = p1Misses + 1;
                    p1MissesCount.text(p1Misses);
                    $word2.css({marginLeft: "0px"})
                }
                    
                if((p2Turn === "yes" || waitForYes === "yes") && time2 > 0) {
                    p2Misses = p2Misses + 1;
                    p2MissesCount.text(p2Misses)
                    $word2.css({marginLeft: "0px"})
                }  
            }
        },
        
        move3Fn: function () {
            $word3.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word3.css("marginLeft")) > 600){
                missHit3();
                if (time > 0) {
                    p1Misses = p1Misses + 1;
                    p1MissesCount.text(p1Misses);
                    $word3.css({marginLeft: "0px"})
                }
                    
                if((p2Turn === "yes" || waitForYes === "yes") && time2 > 0) {
                    p2Misses = p2Misses + 1;
                    p2MissesCount.text(p2Misses)
                    $word3.css({marginLeft: "0px"})
            }  
            }
        },
        
        move4Fn: function () {
            $word4.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word4.css("marginLeft")) > 600){
                missHit4();
                    if (time > 0) {
                        p1Misses = p1Misses + 1;
                        p1MissesCount.text(p1Misses);
                        $word4.css({marginLeft: "0px"})
                    }
                        
                    if((p2Turn === "yes" || waitForYes === "yes") && time2 > 0) {
                        p2Misses = p2Misses + 1;
                        p2MissesCount.text(p2Misses)
                        $word4.css({marginLeft: "0px"})
                    }  
            }
        },
        
        move5Fn: function () {
            $word5.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word5.css("marginLeft")) > 600){
                missHit5();
                    if (time > 0) {
                        p1Misses = p1Misses + 1;
                        p1MissesCount.text(p1Misses);        
                        $word5.css({marginLeft: "0px"})
                    }
                    
                    if((p2Turn === "yes" || waitForYes === "yes") && time2 > 0) {
                        p2Misses = p2Misses + 1;
                        p2MissesCount.text(p2Misses)
                        $word5.css({marginLeft: "0px"})
                    }  
            }
        },
        
        move6Fn: function () {
            $word6.css({marginLeft: "+=" + randomInt(moveNSpeed.wordSpeed.length) + "px"})
            if (parseInt($word6.css("marginLeft")) > 600){
                missHit6();
                    if (time > 0) {
                        p1Misses = p1Misses + 1;
                        p1MissesCount.text(p1Misses)
                        $word6.css({marginLeft: "0px"})
                    }
                    
                    if((p2Turn === "yes" || waitForYes === "yes") && time2 > 0) {
                        p2Misses = p2Misses + 1;
                        p2MissesCount.text(p2Misses)
                        $word6.css({marginLeft: "0px"})
                    }  
            }
        } }
        
        var word1Move = setInterval(moveNSpeed.move1Fn, 20);
        var word2Move = setInterval(moveNSpeed.move2Fn, 24);
        var word3Move = setInterval(moveNSpeed.move3Fn, 28);
        var word4Move = setInterval(moveNSpeed.move4Fn, 32);
        var word5Move = setInterval(moveNSpeed.move5Fn, 36);
        var word6Move = setInterval(moveNSpeed.move6Fn, 40);