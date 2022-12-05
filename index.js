//removed logic to own text file

// button to play game
const btn = document.querySelector('.btn').addEventListener('click', playGame);

// only using this short array, could be more words, could also use an api with words too fetch from
const wordsArr = [
  'css',
  'try',
  'new',
  'way',
  'node',
  'next',
  'word',
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
  'style',
  'dance',
  'state',
  'react',
  'hyper',
  'gamer',
  'coder',
  'agile',
  'fresh',
  'editor',
  'folder',
  'animal',
  'arrays',
  'coding',
  'player',
  'culture',
  'postman',
  'wordpress',
  'developer',
  'education',
  'javascript',
  'programming',
];

// creating the game loop
function playGame() {
  // get a random word from the words array, one const ;)
  const secretWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  // Declaring variable for player Guess
  let playerGuess;
  // creating an array to hold the right guessed letters
  let answerArr = [];

  // used letters array, that is not included in the word
  let usedLetters = [];

  // quit game initialization set to false
  let quitGame = false;

  /* looping thru the secret word and adding it to the answer array 
so the player will see how many letters there is and
also show progress of the word if guess is right */
  for (let i = 0; i < secretWord.length; i++) {
    answerArr[i] = '_';
  }

  //creating guesses variable with 6 chances
  let guesses = 6;
  // showing how many letter remain for the right word
  let remainingLetters = secretWord.length;

  // Alert to show the info of the game
  alert(
    'Welcome! \nThis is a hangman (word guessing) game \nTo play continue with pressing OK' +
      '\nThe word is ' +
      answerArr +
      ' : ' +
      secretWord.length +
      ' characters long'
  );

  while (remainingLetters > 0 && guesses > 0) {
    // regex to check if input is number or letter
    var regexCheckNumber = /^[0-9]+$/;
    var regexCheckLetter = /^[a-öA-Ö]+$/;
    // initializing the playerGuess variable by taking in the player input
    playerGuess = prompt(
      'Guess a letter!' +
        ' or click cancel to quit.' +
        '\nYour guessed letters ' +
        answerArr.join(' ') +
        '\nGuesses left: ' +
        guesses +
        '\nLetters remaining ' +
        remainingLetters
    );
    // check if sercretword has playerguess letter in it and answer array does not
    if (secretWord.includes(playerGuess) && !answerArr.includes(playerGuess)) {
      // looping over the secretWord and checking if the playerguessed letter is in the word and what position
      for (let j = 0; j < secretWord.length; j++) {
        if (secretWord[j] === playerGuess) {
          answerArr[j] = playerGuess;
          // decrease remaining letters in the word
          remainingLetters--;
        }
      }
    } else if (playerGuess === null || playerGuess === '') {
      //check player guess is
      quitGame = true;
      /* alert('no input given, game will end!'); */
      break;
    } else if (
      playerGuess.length !== 1 ||
      !playerGuess.match(regexCheckLetter) ||
      playerGuess.match(regexCheckNumber)
    ) {
      alert('Please use letters only & one at a time');
    }
    // Alert if letter is already used checking the answer array and used letters array
    else if (
      answerArr.includes(playerGuess) ||
      usedLetters.includes(playerGuess)
    ) {
      alert('You already used this letter');
    } else {
      // update the game progress guess is match to no match and -1 on guesses
      // also push the letter that is not included in the word to used letters array
      guesses--;
      usedLetters.push(playerGuess);
    }
    // game loop ending
    console.log(guesses);
  }
  // game endings
  if (guesses === 0) {
    alert(
      'Game over \nSorry You have no more guesses: ' +
        guesses +
        '\nThe word was: ' +
        secretWord.toUpperCase() +
        '\nYour guess progress ' +
        answerArr.join(' ').toUpperCase()
    );
  } else if (quitGame === true) {
    alert("Sad You diden't want to continue, \nHave a great day! :D");
  } else {
    alert(
      'YOU WIN!' +
        '\nGood job buddy! The answer was ' +
        secretWord.toUpperCase() +
        '\nYour guess was: ' +
        answerArr.join('').toUpperCase()
    );
  }
  //game function ending
}
