import {
  expect,
  it,
  describe
} from "@jest/globals";
//Write test for morse code function 

// import {multiply} from "./sums";

describe("Multiply function tests", () => {
  it("Multiplies 5 and 2 to equal 10", () => {
    const result = multiply(5, 2);
    expect(result).toBe(10)
  });
  it("Multiplies 10 and 10 to equal 100", () => {
    const result = multiply(10, 10);
    expect(result).toBe(100)
  });

})




describe("The Morse Code test suite", () => {
  //Write our postive tests: 

  it("Checks the input entered is valid", () => {
    //Write tests in here 
    const result = englishToMorse("hello world");
    expect(result).toStrictEqual(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });
  it("Checks the input entered is not case sensitive", () => {
    //Write tests in here 
    const result = englishToMorse("HELLO WORLD");
    expect(result).toStrictEqual(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });
  it("Checks the input entered valid", () => {
    //Write tests in here 
    const result = englishToMorse("morse code is awesome");
    expect(result).toStrictEqual("-- --- .-. ... . / -.-. --- -.. . / .. ... / .- .-- . ... --- -- .");
  });
  it("Checks for a single letter input", () => {
    //Write tests in here 
    const result = englishToMorse("a");
    expect(result).toStrictEqual(".-");
  });
  it("Checks for a single letter input", () => {
    //Write tests in here 
    const result = englishToMorse("z");
    expect(result).toStrictEqual("--..");
  });
  it("Checks for a numerical input", () => {
    //Write tests in here 
    const result = englishToMorse("19141952");
    expect(result).toStrictEqual(".---- ----. .---- ....- .---- ----. ..... ..---");
  });

  // negative tests for edge cases

  it("Checks the filter works correctly and removes symbols from string if pressed accidentally", () => {
    //Write tests in here - This test needs massively rethinking! 
    const result = englishToMorse("morse@%code!is:awesome");
    expect(result).toStrictEqual("-- --- .-. ... . / -.-. --- -.. . / .. ... / .- .-- . ... --- -- .");
  });

})