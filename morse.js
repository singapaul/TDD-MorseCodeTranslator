import {
  dictionary
} from "./objects/dictionary.js"

// defining constants

// define the button element in the document with a queryselector
const translateButtonPress = document.querySelector(".morseCodeContainer__submit");
// getting the innerText of the input field
const englishToTranslate = document.querySelector(".morseCodeContainer__inputField");
// getting the output of the function to print to the display
const translationToDisplay = document.querySelector(".morseCodeContainer__display");


// This line will remove any spaces and replace with a /

const spaceToString = (string) => {
  // a single s on it's own will pick up all whitespace - whereas /s/s will only pickup when there is more than 2 spaces 
  return string.replace(/\s/g, '/');
}
// This line will convert all text to uppercase;
const toCapitalCase = (string) => {
  return string.toUpperCase();
};
// This tidies up the clean string functions
const cleanInputString = (string) => {
  const stringToManipulate = spaceToString(string);
  const cleanString = toCapitalCase(stringToManipulate);
  return cleanString
};


const cleanEnglishStringToMorse = (string) => {
  // This will look through every item in the string and map it based on the value
  // split the string into each character, the use map, then use join
  const stringInput = cleanInputString(string);
  // split the string
  const stringIn = stringInput.split('');
  
  // translate the string using map function 
  const translatedArray = stringIn.map(letter => {
    // return sweetItem+"A"
    if (dictionary[letter] !== undefined) {
      return dictionary[letter];
    } else {
      return "/"
    }
  })

  return translatedArray.join("")
  // now we need to rejoin the string with a join function
}

// write the function that happens when you press the button
const translateMorsetoEnglishFunction = () => {
  // use .value to get the value out of the system 
  console.log(englishToTranslate.value)
  // now we want to 1) run the translate function on our string
  // const textToDisplay = translateFunctionIneedtowrite();
  translationToDisplay.innerText = "The string result variable will be assigned here"
}

// On button press we run our translate function 
translateButtonPress.addEventListener("click", translateMorsetoEnglishFunction);
