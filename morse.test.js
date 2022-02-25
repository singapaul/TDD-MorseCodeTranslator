import {
  expect,
  it,
  describe
} from "@jest/globals";
//Write test for morse code function 
import {
  spaceToString
} from "./function.js"
import {
  toCapitalCase
} from "./function.js"
import {
  cleanInputString
} from "./function.js"
import {
  cleanEnglishStringToMorse
} from "./function.js"

describe("The Morse Code test suite", () => {
  //Write our postive tests: 
  it("Checks the input is converted to /", () => {
    //Write tests in here 
    const result = spaceToString("hello world");
    expect(result).toStrictEqual("hello/world");
  })

  it("Checks the input entered is valid", () => {
    //Write tests in here 
    const result = cleanEnglishStringToMorse("HELLO/WORLD");
    expect(result).toStrictEqual("...... - ... - ..---/.-----. - .. - ..-..");
  })

  it("Checks the input is uppercase", () => {
    //Write tests in here 
    const result = toCapitalCase("helloworld");
    expect(result).toStrictEqual("HELLOWORLD");
  });

  it("Checks the input string is ready for translation", () => {
    //Write tests in here 
    const result = cleanInputString("hello world");
    expect(result).toStrictEqual("HELLO/WORLD");
  });

})

// test for numbers
// negative tests for edge cases

// it("Checks the filter works correctly and removes symbols from string if pressed accidentally", () => {
//   //Write tests in here - This test needs massively rethinking! 
//   const result = englishToMorse("morse@%code!is:awesome");
//   expect(result).toStrictEqual("-- --- .-. ... . / -.-. --- -.. . / .. ... / .- .-- . ... --- -- .");
// });