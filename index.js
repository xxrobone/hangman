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

// creating a function for taking a random word from array of words
function randomWord(inputArr) {
  let randomWord;
  // check that array actully is an array
  if (
    Array.isArray(inputArr) &&
    inputArr !== null &&
    inputArr !== undefined &&
    inputArr.length !== 0
  ) {
    randomWord = inputArr[Math.floor(Math.random() * inputArr.length)];
  } else {
    console.log('No array of words is found, need one to function');
  }
  return randomWord;
}

// creating the game loop
function playGame() {
  // get a random word from the words array, one const ;)

  const secretWord = randomWord(wordsArr);

  // Declaring variable for player Guess
  let userInput;
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
    var regexCheckLetter = /^[a-??A-??]+$/;
    // initializing the userInput variable by taking in the player input or cancel
    userInput = prompt(
      'Guess a letter!' +
        ' or click cancel to quit.' +
        '\nYour guessed letters ' +
        answerArr.join(' ') +
        '\nGuesses left: ' +
        guesses +
        '\nLetters remaining ' +
        remainingLetters
    );
    // check if sercretword has userInput letter in it and answer array does not
    if (secretWord.includes(userInput) && !answerArr.includes(userInput)) {
      // looping over the secretWord and checking if the userInputed letter is in the word and what position
      for (let j = 0; j < secretWord.length; j++) {
        if (secretWord[j] === userInput) {
          answerArr[j] = userInput;
          // decrease remaining letters in the word
          remainingLetters--;
        }
      }
    } else if (userInput === null || userInput === '') {
      //check player guess is
      quitGame = true;
      /* alert('no input given, game will end!'); */
      break;
    } else if (
      userInput.length !== 1 ||
      !userInput.match(regexCheckLetter) ||
      userInput.match(regexCheckNumber)
    ) {
      alert('Please use letters only & one at a time');
    }
    // Alert if letter is already used checking the answer array and used letters array
    else if (answerArr.includes(userInput) || usedLetters.includes(userInput)) {
      alert('You already used this letter');
    } else {
      // update the game progress guess is match to no match and -1 on guesses
      // also push the letter that is not included in the word to used letters array
      guesses--;
      usedLetters.push(userInput);
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
