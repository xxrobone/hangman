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
  'and',
  'god',
  'arc',
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
let includedLettersArr = [];

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
  if (guessArr.includes(answerArr[i]) && guessArr[j] !== answerArr[i]) {
    includedLettersArr.push(answerArr[j]);
    console.log(
      'these letters are right: ' +
        guessArr[j] +
        ' : ' +
        answerArr[i] +
        '\nThese letters are right but in wrong position; ' +
        '\n' +
        includedLettersArr
    );
  }
  if (guessArr[j] == answerArr[i]) {
    showArr[i] = answerArr[i];
  } else {
    console.log('these are not right: ' + guessArr[j]);
  }
  console.log(showArr);
}
