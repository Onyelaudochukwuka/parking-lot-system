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
helpers.createBooking = ({ id, type, status, car, startDate, endDate }) => { 
    const div = document.createElement("div");
    div.className = "w-full shadow-lg overflow-x-scroll gap-6 shadow-gray-300/25 h-auto py-6 flex justify-between items-center rounded-md lg:text-sm text-xs px-6 text-gray-600";
    div.innerHTML = `
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${id}</p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max"><span
                                class="${type === "Car Rental" ? "approved" : status === "Processing" ? "processing" : status === "Secured" ? "secured" : ""} self-start lg:w-fit px-5 py-1 flex items-center justify-center rounded-full font-semibold w-max">${status}</span>
                        </p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${type}</p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max flex flex-col items-center justify-start">
                            <span class="self-start">${car.name}</span>
                            <span class="text-[10px] self-start">${car.type}</span>
                        </p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${startDate}</p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${endDate}</p>
    `
    tableContainer.appendChild(div);
};
helpers.createError = (str) => {
    const p = document.createElement("p");
    p.className = "text-xs text-red-400 transition-transform origin-left duration-500 tracking-wider";
    p.innerText = str;
    return p;
}
let largeCarBookings = [];
let smallCarBookings = [];
const bookButton = helpers.getElement("book-button");
const modal = helpers.getElement("modal");
const closeModal = helpers.getElement("close-modal");
const bookingId = helpers.getElementById("booking-id");
const bookingType = helpers.getElementById("booking-type");
const bookingCar = helpers.getElementById("booking-car");
const bookingStartDate = helpers.getElementById("booking-start-date");
const bookingEndDate = helpers.getElementById("booking-end-date");
const tableContainer = helpers.getElement("table-container");
const submitButton = helpers.getElement("submit-button");
const modalContainer = helpers.getElement("modal-container");
const startDateContainer = helpers.getElement("start-date-container");
const endDateContainer = helpers.getElement("end-date-container");
const bookingTypeContainer = helpers.getElement("booking-type-container");
const bookingCarContainer = helpers.getElement("booking-car-container");
const carTypeCheckbox = helpers.getElementById("car-type-checkbox");
bookButton.addEventListener("click", () => {
    modal.classList.toggle("scale-100");
    modal.classList.toggle("scale-0");
    bookingId.value = helpers.BookCode(5);
});
closeModal.addEventListener("click", () => {
    modal.classList.toggle("scale-100");
    modal.classList.toggle("scale-0");
});

submitButton.addEventListener("click", () => { 
    if (!!bookingId.value && !!bookingType.value && !!bookingCar.value && !!bookingStartDate.value && !!bookingEndDate.value) {
        if (bookingStartDate.value < bookingEndDate.value) {
            if (bookingStartDate.value >= new Date().toISOString().split("T")[0]) {
                if (carTypeCheckbox.checked) {
                    const booking = {
                        id: bookingId.value,
                        type: bookingType.value,
                        status: bookingType.value === "Car Rental" ? "Coming Soon" : largeCarBookings.length > 8 ? "Processing" : "Secured",
                        car: {
                            name: bookingCar.value,
                            type: "Large Car"
                        },
                        startDate: bookingStartDate.value,
                        endDate: bookingEndDate.value
                    };
                    largeCarBookings = [...largeCarBookings, booking];
                    helpers.createBooking(booking);
                } else {
                    const booking = {
                        id: bookingId.value,
                        type: bookingType.value,
                        status: bookingType.value === "Car Rental" ? "Coming Soon" : smallCarBookings.length > 12 ? "Processing" : "Secured",
                        car: {
                            name: bookingCar.value,
                            type: "Small Car"
                        },
                        startDate: bookingStartDate.value,
                        endDate: bookingEndDate.value
                    };
                    smallCarBookings = [...smallCarBookings, booking];
                    helpers.createBooking(booking);
                }
                modal.classList.toggle("scale-100");
                modal.classList.toggle("scale-0");
                bookingId.value = "";
                bookingType.value = "";
                bookingCar.value = "";
                bookingStartDate.value = "";
                bookingEndDate.value = "";
                modalContainer.scrollTo(0, 0);
            } else {
                const startDateContainerMessage = helpers.createError("Start date must be greater or equals to today's date");
                startDateContainer.appendChild(startDateContainerMessage);
                setTimeout(() => {
                    startDateContainerMessage.classList.add("scale-0");
                    setTimeout(() => {
                        startDateContainer.removeChild(startDateContainerMessage)
                    }, 1000);
                }, 5000);
            }
        } else {
            const startDateContainerMessage = helpers.createError("Start date must be less than end date");
            const endDateContainerMessage = helpers.createError("End date must be greater than start date");
            startDateContainer.appendChild(startDateContainerMessage);
            endDateContainer.appendChild(endDateContainerMessage);
            setTimeout(() => {
                startDateContainerMessage.classList.add("scale-0");
                endDateContainerMessage.classList.add("scale-0");
                setTimeout(() => {
                    startDateContainer.removeChild(startDateContainerMessage)
                    endDateContainer.removeChild(endDateContainerMessage);
                }, 1000);
            }, 5000);
        }
    }
    else {
        if (!bookingType.value) {
            const bookingTypeContainerMessage = helpers.createError("Booking Type is required");
            bookingTypeContainer.appendChild(bookingTypeContainerMessage);
            setTimeout(() => {
                bookingTypeContainerMessage.classList.add("scale-0");
                setTimeout(() => {
                    bookingTypeContainer.removeChild(bookingTypeContainerMessage)
                }, 1000);
            }, 5000);
        }
        if (!bookingCar.value) {
            const bookingCarContainerMessage = helpers.createError("Booking Car is required");
            bookingCarContainer.appendChild(bookingCarContainerMessage);
            setTimeout(() => {
                bookingCarContainerMessage.classList.add("scale-0");
                setTimeout(() => {
                    bookingCarContainer.removeChild(bookingCarContainerMessage)
                }, 1000);
            }, 5000);
        }
        if (!bookingStartDate.value) {
            const startDateContainerMessage = helpers.createError("Start date is required");
            startDateContainer.appendChild(startDateContainerMessage);
            setTimeout(() => {
                startDateContainerMessage.classList.add("scale-0");
                setTimeout(() => {
                    startDateContainer.removeChild(startDateContainerMessage)
                }, 1000);
            }, 5000);
        }
        if (!bookingEndDate.value) {
            const endDateContainerMessage = helpers.createError("End date is required");
            endDateContainer.appendChild(endDateContainerMessage);
            setTimeout(() => {
                endDateContainerMessage.classList.add("scale-0");
                setTimeout(() => {
                    endDateContainer.removeChild(endDateContainerMessage)
                }, 1000);
            }, 5000);
        }
    }
});

