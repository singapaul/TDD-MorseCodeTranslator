// importing the dictionary of key values
// import {
//   dictionary
// } from "./objects/dictionary.js"

import {
  spaceToString
} from "./morse";
import {
  toCapitalCase
} from "./morse";
import {
  cleanEnglishStringToMorse
} from "./morse";
import {
  cleanInputString
} from "./morse";


// defining the button areas

// define the button element in the document with a queryselector
const translateButtonPress = document.querySelector(".morseCodeContainer__submit");
// getting the innerText of the input field
const englishToTranslate = document.querySelector(".morseCodeContainer__inputField");
// getting the output of the function to print to the display
const translationToDisplay = document.querySelector(".morseCodeContainer__display");
// getting the reset button
const resetButton = document.querySelector(".morseCodeContainer__reset");


// On translate button press we update our results with the below text
export const translateMorsetoEnglishFunction = () => {
  translationToDisplay.innerText = cleanEnglishStringToMorse(englishToTranslate.value);
}

// On reset button press clear in the input and results screen
export const resetPress = () => {
  englishToTranslate.value = "";
  translationToDisplay.innerText = "";
}

// On button press we run our translate function 
translateButtonPress.addEventListener("click", translateMorsetoEnglishFunction);
// On button we run our reset function
resetButton.addEventListener("click", resetPress);