//prepping for word game "hangman"
// 1 pick a random word from an array v
// 2 take a players guess input using prompt v
// 3 quit the game if player wants to quit
// 4 Check if player guess is a letter in the word
// 5 Keep track of guesses and letters guessed
// 6 show the player their progress
// 7 Show the player if the word is right
// 8 Create  game loop

// only using 4 letter words, will change this later
const wordsArr = [
  'code',
  'home',
  'from',
  'done',
  'bros',
  'show',
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
];

// get a random word from the words array
const secretWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

// creating an array to hold the right guessed letters
let answerArr = [];
// looing thru the secret word and adding to the array
// so the player will see how many letters there is and
// also show progress
for (let i = 0; i < secretWord.length; i++) {
  answerArr[i] = '_';
}

// Alert to show the info of the game
alert(
  'Welcome! \nThis is a hangman word guessing game \nTo play continue with pressing OK' +
    '\nThe word is ' +
    answerArr +
    'characters long'
);

//creating guesses variable with 6 chances
let guesses = 6;
// showing how many letter remain for the right word
let remainingLetters = secretWord.length;

// creating the game loop
while (remainingLetters > 0 && guesses > 0) {
  // create a variable for boolean to later add true or false for guesses control
  let guessMatch;
  // regex to check if input is letter or number
  var regexCheckNumber = /^[0-9]+$/;
  var regexCheckLetter = /^[a-öA-Ö]+$/;
  // take the player input /guess as a variable
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
  // check if sercretword has playerguess in it
  if (secretWord.includes(playerGuess)) {
    // looping over the secretWord and checking if the playerguessed letter is in the word and what position
    for (let j = 0; j < secretWord.length; j++) {
      if (secretWord[j] === playerGuess) {
        answerArr[j] = playerGuess;
        // decrease remaining letters in the word
        remainingLetters--;
        // guess is match so guesses remains
        guessMatch = 'match';
      }
    }
  } else if (playerGuess === null) {
    alert('No letter given, no input, no game.');
    continue;
  } else if (
    playerGuess.length !== 1 ||
    (playerGuess === playerGuess) === regexCheckLetter ||
    playerGuess.match(regexCheckNumber)
  ) {
    alert('Please use letters only & one at a time');
  } else {
    // update the game progress nomatch = -1 on guesses
    guessMatch = 'nomatch';
  }
  // check if the word has a match with player guess
  // to either move on or take away from guesses
  if (!guessMatch === 'match') {
    break;
  } else if (guessMatch === 'nomatch' && guesses > 0) {
    guesses--;
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
      '\nYour guess was: ' +
      answerArr.join(' ')
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
