console.log("Hello Daddy");
import {
  dictionary
} from "./objects/dictionary.js"
console.log(dictionary);

// defining constants

// define the button element in the document with a queryselector
const translateButtonPress = document.querySelector(".morseCodeContainer__submit");
// getting the innerText of the input field
const englishToTranslate = document.querySelector(".morseCodeContainer__inputField");
// getting the output of the function to print to the display
const translationToDisplay = document.querySelector(".morseCodeContainer__display");


// The pseudocode is 

// This line will remove any spaces and replace with a /

const spaceToString = (string) => {
  return string.replace(/\s\s+/g, '/');
}

// This line will convert all text to uppercase;

const toCapitalCase = (string) => {
  return string.toUpperCase();
};


// on submit form button press 1) console log hello 2) console log input contents 




// write the function that happens when you press the button
const translateMorsetoEnglishFunction = () => {
 // use .value to get the value out of the system 
console.log(englishToTranslate.value)

  // now we want to 1) run the translate function on our string
  // const textToDisplay = translateFunctionIneedtowrite();
  // 2) we want to print the result to the display below
  translationToDisplay.innerText = "The string result variable will be assigned here"

}
// write the add click event listener to the button and attach the function 

translateButtonPress.addEventListener("click", translateMorsetoEnglishFunction);