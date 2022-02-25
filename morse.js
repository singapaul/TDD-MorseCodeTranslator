// importing the dictionary of key values
import {
  dictionary
} from "./objects/dictionary.js"

// defining the button areas

// define the button element in the document with a queryselector
const translateButtonPress = document.querySelector(".morseCodeContainer__submit");
// getting the innerText of the input field
const englishToTranslate = document.querySelector(".morseCodeContainer__inputField");
// getting the output of the function to print to the display
const translationToDisplay = document.querySelector(".morseCodeContainer__display");
// getting the reset button
const resetButton = document.querySelector(".morseCodeContainer__reset");


// This line will remove any spaces and replace with a /
const spaceToString = (string) => {
  // a single s on it's own will pick up all whitespace - whereas /s/s will only pickup when there is more than 2 spaces 
  return string.replace(/\s/g, '/');
}
// This function will convert all text to uppercase;
const toCapitalCase = (string) => {
  return string.toUpperCase();
};
// This tidies up the clean string functions, by it calls the capitalise and space removal functions
const cleanInputString = (string) => {
  const stringToManipulate = spaceToString(string);
  const cleanString = toCapitalCase(stringToManipulate);
  return cleanString
};

// Main function which takes in string and translates into morse code
const cleanEnglishStringToMorse = (string) => {
  // clean and standardize the input array
  const stringInput = cleanInputString(string);
  // split the string into an array by character
  const stringIn = stringInput.split('');
  // translate the string using map function and dictionary obeject
  const translatedArray = stringIn.map(letter => {
    if (dictionary[letter] !== undefined) {
      return dictionary[letter];
    } else {
      return "/"
    }
  })
  // join the letters back into single string and return result
  return translatedArray.join("")
}

// On translate button press we update our results with the below text
const translateMorsetoEnglishFunction = () => {
  // const textToDisplay = translateFunctionIneedtowrite();
  translationToDisplay.innerText = cleanEnglishStringToMorse(englishToTranslate.value);
}

// On reset button press clear in the input and results screen
const resetPress = () => {
  englishToTranslate.value = "";
  translationToDisplay.innerText = "";

}

// On button press we run our translate function 
translateButtonPress.addEventListener("click", translateMorsetoEnglishFunction);
// On button we run our reset function
resetButton.addEventListener("click", resetPress);
