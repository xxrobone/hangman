
//prepping for word game "hangman" 
// trying to code on mobile
const words = ["travel", "playing", "famous", "gamer", "tired", "training"];

var guessWord = words[1]

var inputWord = prompt("guess a word").toString()

var wordLetters = inputWord.split("");

var guessWordLetters = guessWord.split("");

console.log("word: " + guessWord + "\ninputWord: " + inputWord + " \nword letter: " + wordLetters + " \ninput letters: " + guessWordLetters );
