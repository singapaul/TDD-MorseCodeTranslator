// importing the dictionary of key values
// import {
//   dictionary
// } from "./objects/dictionary.js"

import { spaceToString } from "./function.js";
import { toCapitalCase } from "./function.js";
import { cleanEnglishStringToMorse } from "./function.js";
import { cleanInputString } from "./function.js";

// defining the button areas
// Get the elements from the screen for English to Morse
// define the button element in the document with a queryselector
const translateButtonPress = document.querySelector(
  ".morseCodeContainer__submit"
);
// getting the innerText of the input field
const englishToTranslate = document.querySelector(
  ".morseCodeContainer__inputField"
);
// getting the output of the function to print to the display
const translationToDisplay = document.querySelector(
  ".morseCodeContainer__display"
);
// getting the reset button
const resetButton = document.querySelector(".morseCodeContainer__reset");
// getting the morseCodeToEnglish box
const morseToEnglishContainer = document.querySelector(".MorseToEnglishBox");
// getting to english to morse code box
const EnglishToMorseContainer = document.querySelector(".morseCodeContainer");
// encrypt button
const encryptButton = document.querySelector(".MorseToEnglishBox__encrypt");
// decrypt button
const decryptButton = document.querySelector(".morseCodeContainer__Decrypt");

// Morse Code to English Translation

const morseToEnglishInputFieldBox = document.querySelector(
  ".MorseToEnglishBox__inputField"
);
const morseToEnglishSubmit = document.querySelector(
  ".MorseToEnglishBox__submit"
);
const morseToEnglishreset = document.querySelector("MorseToEnglishBox__reset");
const morseToEnglishDisplay = document.querySelector(
  ".MorseToEnglishBox__display"
);

// On translate button press we update our results with the below text
const translateMorsetoEnglishFunction = () => {
  translationToDisplay.innerText = cleanEnglishStringToMorse(
    englishToTranslate.value
  );
};

// On reset button press clear in the input and results screen
const resetPress = () => {
  englishToTranslate.value = "";
  translationToDisplay.innerText = "";
};

// On button press we run our translate function
translateButtonPress.addEventListener("click", translateMorsetoEnglishFunction);
// On button we run our reset function
resetButton.addEventListener("click", resetPress);
// on start up we want to hide the morse to english box
morseToEnglishContainer.style.display = "none";

// Changes the box on the screen
const decryptMorse = () => {
  morseToEnglishContainer.style.display = "flex";
  EnglishToMorseContainer.style.display = "none";
};
const encyptMorse = () => {
  morseToEnglishContainer.style.display = "none";
  EnglishToMorseContainer.style.display = "flex";
};

// decrypt button
decryptButton.addEventListener("click", decryptMorse);
encryptButton.addEventListener("click", encyptMorse);

// 1. On button press
// 2. Take string from input
// 3. split each point in string into array
// 4. look up values and map translation onto new array
// 5. swap / for spaces
// 6. print the string in the output
