const helpers = {};

helpers.Book = (strLength) => {
  strLength = typeof strLength == "number" && strLength > 0 ? strLength : false;
  if (strLength) {
    // Define all the possible characters that can go into a string;
    let possibleCharacters = "abcdefghijklmnopqrstuvwxyxz";
    let lastTwoNumbers = "1234567890";
    let str = "";
    for (let i = 1; i <= strLength; i++) {
      if (strLength - i < 2) {
        // Get random character from the possible string
        let randomNumber = lastTwoNumbers.charAt(
          Math.floor(Math.random() * lastTwoNumbers.length)
        );
        // Append this character to the final string
        str += randomNumber;
      } else {
        // Get random character from the possible string
        let randomCharacter = possibleCharacters.charAt(
          Math.floor(Math.random() * possibleCharacters.length)
        );
        // Append this character to the final string
        str += randomCharacter;
      }
    }
    //return the final string
    return str.toUpperCase() + "-" + new Date().getFullYear();
  } else {
    return false;
  }
};
console.log(helpers.Book(5));