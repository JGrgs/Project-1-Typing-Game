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