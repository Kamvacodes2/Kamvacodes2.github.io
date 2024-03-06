'use strict'

let wordList = ["apples","pumpkin","grape","orange","pineapple","granadilla"];
let word = pickWord();
let answerArray = []
setupAnswerArray();
let remainingLetters = word.length;
let guess;
let lives = 3



while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        guess = guess.toLowerCase();
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
   };
   showAnswerAndCongratulatePlayer();



function pickWord () {
    // Return a random word
    return wordList[Math.floor(Math.random() * wordList.length)]
   };

function setupAnswerArray () {
    // Return the answer array
    for (let b = 0; b < word.length; b++) {
        answerArray[b] ='_';
    }
   };

function showPlayerProgress () {
    // Use alert to show the player their progress
    return alert(answerArray.join(" "));
   };

function getGuess () {
    // Use prompt to get a guess
    return prompt(`Guess a letter in the word you have ${lives} lives remaining`);
   };

function updateGameState () {
    // Update answerArray and return a number showing how many
 // times the guess appears in the word so remainingLetters
 // can be updated
    let correctGuesses = 0;
    for (let i = 0; i < word.length; i++) {
        if (guess === word[i]) {
            if (answerArray[i] !== "_") {
                alert(`You have already guessed this letter  ${guess}`);
                break;
            } else {
                answerArray[i] = guess;
                correctGuesses ++;
            }
        }
    }
    if (correctGuesses === 0) {
        lives --;
    };
    return correctGuesses
   };

function showAnswerAndCongratulatePlayer () {
    // Use alert to show the answer and congratulate the player
    if (remainingLetters === 0) {
        alert(`Congrats you won ! the word is ${word}`);
        } else if (lives === 0) {
        alert(`Unfortunately you ran out of lives the word was  ${word}`);
        }; 
   };
   

console.log(Boolean(10 > 9));