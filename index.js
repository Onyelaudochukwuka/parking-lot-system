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
    div.attributes = { id: id };
    const button = document.createElement('button');
    button.innerHTML = `<svg class="w-6 h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
        <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M358.625,313.375  c12.5,12.492,12.5,32.758,0,45.25C352.383,364.875,344.188,368,336,368s-16.383-3.125-22.625-9.375L256,301.25l-57.375,57.375  C192.383,364.875,184.188,368,176,368s-16.383-3.125-22.625-9.375c-12.5-12.492-12.5-32.758,0-45.25L210.75,256l-57.375-57.375  c-12.5-12.492-12.5-32.758,0-45.25c12.484-12.5,32.766-12.5,45.25,0L256,210.75l57.375-57.375c12.484-12.5,32.766-12.5,45.25,0  c12.5,12.492,12.5,32.758,0,45.25L301.25,256L358.625,313.375z" />
    </svg>`;
    let carPrice = 2;
    if (car.type === "Large Car") {
        carPrice = 3.5;
    }
    button.addEventListener('click', () => {
        let priceIncurred = moment(Date.now()).diff(moment(startDate), 'minute') * carPrice;
        priceModal.classList.toggle('scale-100');
        priceLabel.innerHTML = `Price incurred: <s>N</s>${priceIncurred}`;
    });
    pricePayment.addEventListener('click', () => {
        priceModal.classList.toggle('scale-100');
        console.log(div.attributes.id);
    });
    div.className = "w-full shadow-lg overflow-x-scroll gap-6 shadow-gray-300/25 h-auto py-6 flex justify-between items-center rounded-md lg:text-sm text-xs px-6 text-gray-600";
    div.innerHTML = `
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${id}</p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max"><span
                                class="${type === "Car Rental" ? "approved" : status === "Processing" ? "processing" : status === "Secured" ? "secured" : ""} self-start lg:w-fit px-5 py-1 flex items-center justify-center rounded-full font-semibold w-max">${status}</span>
                        </p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${type}</p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max flex flex-col items-center justify-start">
                            <span class="self-start">${car.name}</span>
                            <span class=" self-start flex gap-1 items-center">
                            ${
        car.type === "Large Car"
        ?
                                `<svg version="1.1" id="Capa_1" class="w-3 h-3 fill-black text-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 117.135 117.135" style="enable-background:new 0 0 117.135 117.135;" xml:space="preserve">
                                <g>
                                    <path style="fill:#000000;" d="M24.281,71.674c-5.78,0-10.483,4.702-10.483,10.482c0,5.779,4.702,10.482,10.483,10.482
                            		c5.78,0,10.483-4.703,10.483-10.482C34.764,76.376,30.061,71.674,24.281,71.674z M24.281,90.054c-4.354,0-7.897-3.543-7.897-7.897
                            		s3.542-7.897,7.897-7.897s7.897,3.543,7.897,7.897S28.635,90.054,24.281,90.054z" />
                                    <path style="fill:#000000;"
                                        d="M106.651,71.674c-5.78,0-10.482,4.702-10.482,10.482c0,5.779,4.702,10.482,10.482,10.482
                            		c5.78,0,10.483-4.703,10.483-10.482C117.135,76.376,112.432,71.674,106.651,71.674z M106.651,90.054
                            		c-4.354,0-7.897-3.543-7.897-7.897s3.543-7.897,7.897-7.897c4.355,0,7.897,3.543,7.897,7.897S111.006,90.054,106.651,90.054z" />
                                    <path style="fill:#000000;" d="M36.76,73.873v9.53h56.683c-0.109-0.667-0.181-1.346-0.181-2.042c0-2.807,0.934-5.393,2.491-7.488
                            		H36.76z" />
                                    <path style="fill:#000000;" d="M23.486,68.766c2.654,0,5.115,0.83,7.148,2.237V45.735H13.78C0,63.05,13.78,45.735,0,63.05v20.353
                            		h11.073c-0.109-0.667-0.181-1.346-0.181-2.042C10.892,74.417,16.542,68.766,23.486,68.766z M16.196,49.214l5.293,0.298v13.24H5.422
                            		L16.196,49.214z" />
                                    <circle style="fill:#000000;" cx="24.281" cy="82.156" r="5.172" />
                                    <circle style="fill:#000000;" cx="106.651" cy="82.156" r="5.172" />
                                    <path style="fill:#000000;"
                                        d="M114.365,24.496H36.76v43.568h77.605V24.496z M56.762,55.896h-8V30.973h8V55.896z M71.963,55.896
                            		h-8.001V30.973h8.001V55.896z M87.164,55.896h-8.001V30.973h8.001V55.896z M102.365,55.896h-8.001V30.973h8.001V55.896z" />
                                </g>
                            </svg>`
        : `<svg version="1.1" class="w-3 h-3 fill-black text-black" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 252.811 252.811" style="enable-background:new 0 0 252.811 252.811;" xml:space="preserve">
                                <path d="M246.824,108.485l-3.162-4.442c-3.033-4.262-7.347-11.565-9.615-16.279L218.451,55.35
                            	c-2.665-5.541-9.569-9.881-15.719-9.881H94.896c-6.051,0-13.361,3.983-16.644,9.068l-28.7,44.476
                            	c-2.594,4.02-8.722,8.328-13.383,9.408l-25.153,5.829C4.942,115.657,0,121.876,0,128.112v43.845c0,6.47,5.264,11.734,11.734,11.734
                            	h18.743c3.976,13.648,16.589,23.652,31.502,23.652c14.914,0,27.527-10.004,31.503-23.652h60.848
                            	c3.976,13.648,16.589,23.652,31.503,23.652c14.913,0,27.526-10.004,31.502-23.652h23.742c6.471,0,11.734-5.264,11.734-11.734
                            	v-44.734C252.811,121.433,250.182,113.202,246.824,108.485z M61.979,190.828c-9.001,0-16.299-7.299-16.299-16.3
                            	c0-9.002,7.298-16.299,16.299-16.299c9.002,0,16.3,7.297,16.3,16.299C78.279,183.529,70.981,190.828,61.979,190.828z
                            	 M154.981,108.434H72.756c-4.287,0-5.967-2.994-3.732-6.653l20.794-34.059c2.234-3.659,7.57-6.653,11.857-6.653h53.307V108.434z
                            	 M185.833,190.828c-9.002,0-16.3-7.299-16.3-16.3c0-9.002,7.298-16.299,16.3-16.299c9.001,0,16.299,7.297,16.299,16.299
                            	C202.132,183.529,194.834,190.828,185.833,190.828z M209.602,108.434h-35.863V61.068h20.346c4.287,0,8.887,3.333,10.222,7.408
                            	l10.664,32.55C216.306,105.1,213.89,108.434,209.602,108.434z" />
                            </svg>`
                            }
<span class="text-[10px]">${car.type}</span></span>
                        </p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${moment(startDate).fromNow() }</p>
    `
    setInterval(() => {
        div.innerHTML = `
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${id}</p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max"><span
                                class="${type === "Car Rental" ? "approved" : status === "Processing" ? "processing" : status === "Secured" ? "secured" : ""} self-start lg:w-fit px-5 py-1 flex items-center justify-center rounded-full font-semibold w-max">${status}</span>
                        </p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max">${type}</p>
                        <p class="self-start basis-1/6 align-middle my-auto min-w-max flex flex-col items-center justify-start">
                            <span class="self-start">${car.name}</span>
                            <span class=" self-start flex gap-1 items-center">
                            ${car.type === "Large Car"
                ?
                `<svg version="1.1" id="Capa_1" class="w-3 h-3 fill-black text-black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 117.135 117.135" style="enable-background:new 0 0 117.135 117.135;" xml:space="preserve">
                                <g>
                                    <path style="fill:#000000;" d="M24.281,71.674c-5.78,0-10.483,4.702-10.483,10.482c0,5.779,4.702,10.482,10.483,10.482
                            		c5.78,0,10.483-4.703,10.483-10.482C34.764,76.376,30.061,71.674,24.281,71.674z M24.281,90.054c-4.354,0-7.897-3.543-7.897-7.897
                            		s3.542-7.897,7.897-7.897s7.897,3.543,7.897,7.897S28.635,90.054,24.281,90.054z" />
                                    <path style="fill:#000000;"
                                        d="M106.651,71.674c-5.78,0-10.482,4.702-10.482,10.482c0,5.779,4.702,10.482,10.482,10.482
                            		c5.78,0,10.483-4.703,10.483-10.482C117.135,76.376,112.432,71.674,106.651,71.674z M106.651,90.054
                            		c-4.354,0-7.897-3.543-7.897-7.897s3.543-7.897,7.897-7.897c4.355,0,7.897,3.543,7.897,7.897S111.006,90.054,106.651,90.054z" />
                                    <path style="fill:#000000;" d="M36.76,73.873v9.53h56.683c-0.109-0.667-0.181-1.346-0.181-2.042c0-2.807,0.934-5.393,2.491-7.488
                            		H36.76z" />
                                    <path style="fill:#000000;" d="M23.486,68.766c2.654,0,5.115,0.83,7.148,2.237V45.735H13.78C0,63.05,13.78,45.735,0,63.05v20.353
                            		h11.073c-0.109-0.667-0.181-1.346-0.181-2.042C10.892,74.417,16.542,68.766,23.486,68.766z M16.196,49.214l5.293,0.298v13.24H5.422
                            		L16.196,49.214z" />
                                    <circle style="fill:#000000;" cx="24.281" cy="82.156" r="5.172" />
                                    <circle style="fill:#000000;" cx="106.651" cy="82.156" r="5.172" />
                                    <path style="fill:#000000;"
                                        d="M114.365,24.496H36.76v43.568h77.605V24.496z M56.762,55.896h-8V30.973h8V55.896z M71.963,55.896
                            		h-8.001V30.973h8.001V55.896z M87.164,55.896h-8.001V30.973h8.001V55.896z M102.365,55.896h-8.001V30.973h8.001V55.896z" />
                                </g>
                            </svg>`
                : `<svg version="1.1" class="w-3 h-3 fill-black text-black" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 252.811 252.811" style="enable-background:new 0 0 252.811 252.811;" xml:space="preserve">
                                <path d="M246.824,108.485l-3.162-4.442c-3.033-4.262-7.347-11.565-9.615-16.279L218.451,55.35
                            	c-2.665-5.541-9.569-9.881-15.719-9.881H94.896c-6.051,0-13.361,3.983-16.644,9.068l-28.7,44.476
                            	c-2.594,4.02-8.722,8.328-13.383,9.408l-25.153,5.829C4.942,115.657,0,121.876,0,128.112v43.845c0,6.47,5.264,11.734,11.734,11.734
                            	h18.743c3.976,13.648,16.589,23.652,31.502,23.652c14.914,0,27.527-10.004,31.503-23.652h60.848
                            	c3.976,13.648,16.589,23.652,31.503,23.652c14.913,0,27.526-10.004,31.502-23.652h23.742c6.471,0,11.734-5.264,11.734-11.734
                            	v-44.734C252.811,121.433,250.182,113.202,246.824,108.485z M61.979,190.828c-9.001,0-16.299-7.299-16.299-16.3
                            	c0-9.002,7.298-16.299,16.299-16.299c9.002,0,16.3,7.297,16.3,16.299C78.279,183.529,70.981,190.828,61.979,190.828z
                            	 M154.981,108.434H72.756c-4.287,0-5.967-2.994-3.732-6.653l20.794-34.059c2.234-3.659,7.57-6.653,11.857-6.653h53.307V108.434z
                            	 M185.833,190.828c-9.002,0-16.3-7.299-16.3-16.3c0-9.002,7.298-16.299,16.3-16.299c9.001,0,16.299,7.297,16.299,16.299
                            	C202.132,183.529,194.834,190.828,185.833,190.828z M209.602,108.434h-35.863V61.068h20.346c4.287,0,8.887,3.333,10.222,7.408
                            	l10.664,32.55C216.306,105.1,213.89,108.434,209.602,108.434z" />
                            </svg>`
            }
<span class="text-[10px]">${car.type}</span></span>
                        </p>
                        <p class="self-start align-middle my-auto min-w-max">${moment(startDate).fromNow()}</p>
    `
        if (status === "Secured") {
            div.appendChild(button);
        }

    }, 3000);
    if (status === "Secured") {
        div.appendChild(button);
    }
    tableContainer.appendChild(div);
};
function close() {
    console.log('close');
}
helpers.createError = (str) => {
    const p = document.createElement("p");
    p.className = "text-xs text-red-400 transition-transform origin-left duration-500 tracking-wider";
    p.innerText = str;
    return p;
}
let largeCarBookings = [];
let smallCarBookings = [];
const bookButton = helpers.getElement("book-button");
const priceLabel = helpers.getElement("price-label");
const priceModal = helpers.getElement("price-modal");
const pricePayment = helpers.getElement("price-payment");
const modal = helpers.getElement("modal");
const closeModal = helpers.getElement("close-modal");
const bookingId = helpers.getElementById("booking-id");
const bookingType = helpers.getElementById("booking-type");
const bookingCar = helpers.getElementById("booking-car");
const tableContainer = helpers.getElement("table-container");
const submitButton = helpers.getElement("submit-button");
const modalContainer = helpers.getElement("modal-container");
const startDateContainer = helpers.getElement("start-date-container");
const endDateContainer = helpers.getElement("end-date-container");
const bookingTypeContainer = helpers.getElement("booking-type-container");
const bookingCarContainer = helpers.getElement("booking-car-container");
const carTypeCheckbox = helpers.getElementById("car-type-checkbox");
const defaultData = [{
    id: "BHI31-2022",
    type: "Parking Space",
    status: "Processing",
    car: {
        name: "Hyundai 2022",
        type: "Large Car"
    },
    startDate: (Date.now() - 1000 * 60 * 60 * 7),
},
    {
        id: "LXX65-2022",
        type: "Car Rental",
        status: "Coming Soon",
        car: {
            name: "Toyota 2022",
            type: "Small Car"
        },
        startDate: (Date.now() - 1000 * 60 * 60 * 5),
    },
    {
        id: "HJF92-2022",
        type: "Parking Space",
        status: "Secured",
        car: {
            name: "Toyota 2022",
            type: "Small Car"
        },
        startDate: (Date.now() - 1000 * 60 * 60 * 3),
    }
]
window.addEventListener("load", () => {
    defaultData.forEach((data) => helpers.createBooking(data));
});
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
    if (!!bookingId.value && !!bookingType.value && !!bookingCar.value) {
                if (carTypeCheckbox.checked) {
                    const booking = {
                        id: bookingId.value,
                        type: bookingType.value,
                        status: bookingType.value === "Car Rental" ? "Coming Soon" : largeCarBookings.length > 8 ? "Processing" : "Secured",
                        car: {
                            name: bookingCar.value,
                            type: "Large Car"
                        },
                        startDate: Date.now()
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
                        startDate: Date.now()
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

