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
  'home',
  'from',
  'done',
];

let guesses = 6;
let answer = words[Math.floor(Math.random() * words.length)];

const guess = prompt(
  'Guess the word!' + '\nWord is ' + answer.length + ' characters long'
);

let guessArr = [];
let answerArr = [];

let showArr = [];

for (let l = 0; l < answer.length; l++) {
  showArr[l] = '_';
}

console.log(
  'Letters of the word: ' +
    showArr +
    '\nis ' +
    answer.length +
    ' characters long ;)'
);

guessArr = guess.split('');
answerArr = answer.split('');

console.log('this is the word = ' + answerArr.join());

for (let i = 0, j = 0; i < answerArr.length; i++, j++) {
  if (guessArr.includes(answerArr[i])) {
    console.log(
      'these letters are right: ' + guessArr[i] + ' : ' + answerArr[i]
    );
  }
  if (guessArr[i] == answerArr[i]) {
    showArr[i] = answerArr[i];
  } else {
    console.log('these are not right: ' + guessArr[i]);
  }
  console.log(showArr);
}
