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