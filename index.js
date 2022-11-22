//prepping for word game "hangman"
const words = [
  'travel',
  'playing',
  'famous',
  'gamer',
  'tired',
  'training',
  'bot',
  'car',
  'dog',
  'house',
  'dance',
  'code',
];

let guesses = 6;
let answer = words[Math.floor(Math.random() * words.length)];

const guess = prompt(
  'Guess the word!' + '\nWord is ' + answer.length + ' characters long'
);

let guessArr = [];
let answerArr = [];

guessArr = guess.split('');

answerArr = answer.split('');

console.log(
  'this is the answer:' +
    answerArr +
    ' : ' +
    'this is the guessed word: ' +
    guessArr
);

let ansArr = [];

for (let letter of answer) {
  letter = '_';
  ansArr.push(letter);
}

console.log(ansArr);

for (let i = 0, j = 0; i < guessArr.length; i++, j++) {
  if (guessArr.includes(answerArr[i])) {
    console.log(
      'these letters are right: ' + guessArr[i] + ' : ' + answerArr[i]
    );
  } else {
    console.log(
      'these are not in the right spot or are wrong: ' +
        answerArr[i] +
        ' : ' +
        guessArr[i]
    );
  }
}
