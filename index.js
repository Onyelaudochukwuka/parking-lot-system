const helpers = {};

helpers.BookCode = (strLength) => {
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
helpers.getElement = (attribute) => document.querySelector(`[data-element = ${attribute}]`);
helpers.getElementById = (attribute) => document.querySelector(`#${attribute}`);
const bookButton = helpers.getElement("book-button");
const modal = helpers.getElement("modal");
const closeModal = helpers.getElement("close-modal");
const bookingId = helpers.getElementById("booking-id");
const bookingType = helpers.getElementById("booking-type");
const bookingCar = helpers.getElementById("booking-car");
const bookingStartDate = helpers.getElementById("booking-start-date");
const bookingEndDate = helpers.getElementById("booking-end-date");
const tableContainer = helpers.getElement("table-container");
bookButton.addEventListener("click", () => {
    modal.classList.toggle("scale-100");
    modal.classList.toggle("scale-0");
    bookingId.value = helpers.BookCode(5);
});
closeModal.addEventListener("click", () => {
    modal.classList.toggle("scale-100");
    modal.classList.toggle("scale-0");
});