//prepping for word game "hangman"
// 1 pick a random word from an array v
// 2 take a players guess input using prompt v
// 3 quit the game if player wants to quit
// 4 Check if player guess is a letter in the word
// 5 Keep track of guesses and letters guessed
// 6 show the player their progress
// 7 Show the player if the word is right

// game loop

// 1
const wordsArr = ['code', 'home', 'from', 'done', 'bros', 'show'];
/* 
'know',
  'mode',
  'flow',
  'beat',
  'skin',
  'thin',
  'tank',
  'bank',
  'none',
  'join',
  'coin',
  'neon',
  'life',
  'wife',
  'file',
  'mile',
*/

const secretWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

//
let answerArr = [];
for (let i = 0; i < secretWord.length; i++) {
  answerArr[i] = '_';
}

alert(
  'Welcome! \nThis is a hangman word guessing game \nTo play continue with pressing OK' +
    '\nThe word is ' +
    answerArr +
    'characters long'
);

// 5 player progress
let guesses = 6;
let remainingLetters = secretWord.length;

while (remainingLetters > 0 && guesses >= 0) {
  console.log(remainingLetters, answerArr);
  var regexCheckNumber = /^[0-9]+$/;
  var regexCheckLetter = /^[a-öA-Ö]+$/;
  // #6 show the player their progress
  /* alert(answerArr.join(' ')); */
  // #2 player guess, input or can choose to quit
  let playerGuess = prompt(
    'Guess a letter!' +
      ' or click cancel to quit.' +
      '\nYour guessed letters ' +
      answerArr.join(' ') +
      '\nGuesses left: ' +
      guesses +
      '\nLetters remaining ' +
      remainingLetters
  );
  //
  if (playerGuess === null) {
    break;
  } else if (
    playerGuess.length !== 1 ||
    (playerGuess === playerGuess) === regexCheckLetter ||
    playerGuess.match(regexCheckNumber)
  ) {
    alert('Please use letters only & one at a time');
  } else {
    // update the game progress with the player guess
    for (let j = 0; j < secretWord.length; j++) {
      if (secretWord[j] === playerGuess) {
        answerArr[j] = playerGuess;
        // remaining letters in the word
        remainingLetters--;
      }
    }
  }
  // game loop ending
}

// end the game
if (guesses === 0) {
  alert(
    'Game over \nSorry You have no more guesses: ' +
      guesses +
      '\nThe word was: ' +
      secretWord +
      '\nYour guess progress ' +
      answerArr.join(' ')
  );
} else {
  alert(
    'Good job buddy! The answer was ' +
      secretWord +
      'Your guess was: ' +
      alert(answerArr.join(' '))
  );
}

/* 
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
  }
  if (!guessArr.includes(answerArr[i])) {
    console.log(
      '%c These letters are wrong: ' + guessArr[],
      'color: red; background: black;'
    );
    usedLettersArr.push(guessArr[j]);
  }
  console.log('used letters: ' + usedLettersArr);
  console.log('right letters ' + showArr);
}
 */
