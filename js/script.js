// list of guessed letters
const guessedLettersList = document.querySelector(".guessed-letters");

// Guess! button
const guessLetterButton = document.querySelector(".guess");

// input where player will guess a letter
const letterInput = document.querySelector(".letter");

// where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");

// where remaining guesses will be
const remainingGuessesElement = document.querySelector(".remaining");

// span element
const remainingGuessesSpan = document.querySelector(".remaining span");

// where messages will appear
const message = document.querySelector(".message");

// hidden play again button
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

// checking if user input is only one letter
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Only one letter please";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWord(guessedLetters);
    }
};

// show guessed letters
const showGuessedLetters = function () {
    guessedLettersList.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
};

// update word in progress
const updateWord = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const reveal = [];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            reveal.push(letter.toUpperCase())
        } else {
            reveal.push("●")
        }
    }

    wordInProgress.innerText = reveal.join("");
    checkWin();
};

// check if the player won
const checkWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerText = "You guessed it, good job!";
    }
};