// list of guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
// Guess! button
const guessButton = document.querySelector(".guess");
// text input where player will guess a letter
const textBox = document.querySelector("#letter");
// where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// span around number of guesses
const span = document.querySelector("span");
// where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
// hidden "play again" button
const playAgain = document.querySelector(".play-again");

var word = "magnolia";

const placeholder = function (word) {
    const placeholders = [];
    for (const letter of word) {
        console.log(letter);
        placeholders.push("●");
    }
    wordInProgress.innerText = placeholders.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});