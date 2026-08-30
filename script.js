// Select DOM elements
const result = document.getElementById("result");
const clearBtn = document.getElementById("clearBtn");
const copyright = document.getElementById("copy");

// Define the default box color as a red box
const defaultBoxColor = `<div class="description selectRed"><span class="boxTextBg">RED</span></div>`;

result.innerHTML = defaultBoxColor; // Display the default box color initially
let boxColor; // Variable to hold the selected box color class
let boxText; // Variable to hold the selected box text

// Add event listeners
optionsForm.addEventListener("change", selectedOption); // Handle selection
clearBtn.addEventListener("click", clear); // Handle clear button click

// Function to clear selections and reset to default
function clear() {
  result.innerHTML = defaultBoxColor; // Reset the display to default color

  // Check the first option (assuming it's the red option)  and set it as checked
  const firstOption = optionsForm.querySelector('input[type="radio"]');
  if (firstOption) {
    firstOption.checked = true; // Check the first radio button
  }
}

// Function to handle the selected option
function selectedOption(event) {
  const selectedValue = event.target.value; // Get the value of the selected radio button

  // Switch statement to handle different selections
  switch (selectedValue) {
    case "red":
      boxColor = "selectRed";
      boxText = "RED";
      break;
    case "orange":
      boxColor = "selectOrange";
      boxText = "ORANGE";
      break;
    case "yellow":
      boxColor = "selectYellow";
      boxText = "YELLOW";
      break;
    case "green":
      boxColor = "selectGreen";
      boxText = "GREEN";
      break;
    case "blue":
      boxColor = "selectBlue";
      boxText = "BLUE";
      break;
    case "indigo":
      boxColor = "selectIndigo";
      boxText = "INDIGO";
      break;
    case "violet":
      boxColor = "selectViolet";
      boxText = "VIOLET";
      break;
    default:
      console.log("No option selected");
  }

  // Update the result display with the selected color
  result.innerHTML = `<div class="description ${boxColor}"><span class="boxTextBg">${boxText}</span></div>`;
}

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " +
  new Date().getFullYear() +
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;

// =========================
// Uncheck ALL radio buttons
// document.querySelectorAll('input[type="radio"]').forEach((radio) => {
//   radio.checked = false;
// });
