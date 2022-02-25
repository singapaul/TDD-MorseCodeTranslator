import {
  dictionary
} from "./objects/dictionary.js"


// This line will remove any spaces and replace with a /
export const spaceToString = (string) => {
  // a single s on it's own will pick up all whitespace - whereas /s/s will only pickup when there is more than 2 spaces 
  return string.replace(/\s/g, '/');
}
// This function will convert all text to uppercase;
export const toCapitalCase = (string) => {
  return string.toUpperCase();
};
// This tidies up the clean string functions, by it calls the capitalise and space removal functions
export const cleanInputString = (string) => {
  const stringToManipulate = spaceToString(string);
  const cleanString = toCapitalCase(stringToManipulate);
  return cleanString
};

// Main function which takes in string and translates into morse code
export const cleanEnglishStringToMorse = (string) => {
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