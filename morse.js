// importing the dictionary of key values
// import {
//   dictionary
// } from "./objects/dictionary.js"

import { spaceToString } from "./function.js";
import { toCapitalCase } from "./function.js";
import { cleanEnglishStringToMorse } from "./function.js";
import { cleanInputString } from "./function.js";
import { cleanMorseToEnglish } from "./function.js";

const translateButtonPress = document.querySelector(
  ".morseCodeContainer__submit"
);
const englishToTranslate = document.querySelector(
  ".morseCodeContainer__inputField"
);
const translationToDisplay = document.querySelector(
  ".morseCodeContainer__display"
);
const resetButton = document.querySelector(".morseCodeContainer__reset");
const morseToEnglishContainer = document.querySelector(".MorseToEnglishBox");
const EnglishToMorseContainer = document.querySelector(".morseCodeContainer");
const encryptButton = document.querySelector(".MorseToEnglishBox__encrypt");
const decryptButton = document.querySelector(".morseCodeContainer__Decrypt");
const morseToEnglishreset = document.getElementById("MorseToEnglishBox__reset");
const morseToEnglishDisplay = document.querySelector(
  ".MorseToEnglishBox__display"
);
const morseToEnglishInputFieldBox = document.querySelector(
  ".MorseToEnglishBox__inputField"
);
const morseToEnglishSubmit = document.querySelector(
  ".MorseToEnglishBox__submit"
);
const translateMorsetoEnglishFunction = () => {
  translationToDisplay.innerText = cleanEnglishStringToMorse(
    englishToTranslate.value
  );
};
const resetPress = () => {
  englishToTranslate.value = "";
  translationToDisplay.innerText = "";
  morseToEnglishInputFieldBox.value = "";
  morseToEnglishDisplay.innerHTML = "<p style=opacity:0.6;>Seperate words with a '/' and letters with a space</p>";
};
const translateEnglishtoMorseFunction = () => {
  morseToEnglishDisplay.innerText = cleanMorseToEnglish(
    morseToEnglishInputFieldBox.value
  );
};

const encryptFunction = () => {
  EnglishToMorseContainer.classList.remove("absolute");
  morseToEnglishContainer.classList.add("absolute");
};
const decryptFunction = () => {
  morseToEnglishContainer.classList.remove("absolute");
  EnglishToMorseContainer.classList.add("absolute");
};
// on load
morseToEnglishContainer.classList.add("absolute");
EnglishToMorseContainer.classList.remove("absolute");
morseToEnglishDisplay.innerHTML = "<p style=opacity:0.6;>Seperate words with a '/' and letters with a space</p>"

// buttons
morseToEnglishSubmit.addEventListener("click", translateEnglishtoMorseFunction);
translateButtonPress.addEventListener("click", translateMorsetoEnglishFunction);
resetButton.addEventListener("click", resetPress);
morseToEnglishreset.addEventListener("click", resetPress);
encryptButton.addEventListener("click", encryptFunction);
decryptButton.addEventListener("click", decryptFunction);
