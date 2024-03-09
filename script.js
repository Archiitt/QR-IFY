// Select the element with class "wrapper" from the document
const wrapper = document.querySelector(".wrapper");

// Get the input element within the ".form" class inside the wrapper
qrInput = wrapper.querySelector(".form input");

// Get the button element within the ".form" class inside the wrapper
generateBtn = wrapper.querySelector(".form button");

// Get the image element within the ".qr-code" class inside the wrapper
qrImg = wrapper.querySelector(".qr-code img");

// Variable to store the previously entered value, initially undefined
let preValue;

// Add an event listener for "click" on the generate button
generateBtn.addEventListener("click", () => {

  // Get the value from the input field, removing any leading/trailing whitespace
  let qrValue = qrInput.value.trim();

  // Check if the input value is empty or the same as the previous value
  // If so, exit the function without doing anything
  if (!qrValue || preValue === qrValue) return;

  // Update the preValue variable with the current QR value
  preValue = qrValue;

  // Change the button text to "Generating QR Code..." while generating
  generateBtn.innerText = "Generating QR Code...";

  // Update the image source with the QR server API URL
  // - size=200x200 sets the QR code dimension
  // - data=${qrValue} inserts the user input into the data parameter
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

  // Add an event listener for "load" on the QR image
  qrImg.addEventListener("load", () => {

    // Add the "active" class to the wrapper element (likely for styling)
    wrapper.classList.add("active");

    // Reset the button text to "Generate QR Code" after successful generation
    generateBtn.innerText = "Generate QR Code";
  });
});

// Add an event listener for "keyup" on the input field
qrInput.addEventListener("keyup", () => {

  // Check if the input value is empty after trimming whitespace
  if (!qrInput.value.trim()) {

    // Remove the "active" class from the wrapper element (likely for styling)
    wrapper.classList.remove("active");

    // Reset the preValue variable to indicate no previous value
    preValue = "";
  }
});
