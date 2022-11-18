//prepping for word game "hangman"
// trying to code on mobile
const words = ['travel', 'playing', 'famous', 'gamer', 'tired', 'training'];

/* var guessWord = words[1]

var inputWord = prompt("guess a word").toString()

var wordLetters = inputWord.split("");

var guessWordLetters = guessWord.split("");

console.log("word: " + guessWord + "\ninputWord: " + inputWord + " \nword letter: " + wordLetters + " \ninput letters: " + guessWordLetters ); */

let word = words[Math.floor(Math.random() * words.length)];

const inputWord = 'famous'.toLowerCase();

let wordLetterArr = [];
let inputWordLetterArr = [];

wordLetterArr = word.split('');

inputWordLetterArr = inputWord.split('');

console.log(
  'this is the word:' +
    wordLetterArr +
    ' : ' +
    'this is the guessed word: ' +
    inputWordLetterArr
);

for (let i = 0, j = 0; i < wordLetterArr.length; i++, j++) {
  if (wordLetterArr.includes(inputWordLetterArr[i])) {
    console.log(
      'these letters are right: ' +
        inputWordLetterArr[i] +
        ' : ' +
        wordLetterArr[i]
    );
  } else {
    console.log(
      'these are not in the right spot or are wrong: ' +
        inputWordLetterArr[i] +
        ' : ' +
        wordLetterArr[i]
    );
  }
}
