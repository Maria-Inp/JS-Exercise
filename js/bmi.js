const heightInput = document.querySelector(".height-input");
const weightInput = document.querySelector(".weight-input");
const numberResult = document.querySelector(".number");
const statusResult = document.querySelector(".status");
const statusBox = document.querySelector(".status-main-box");
const button = document.querySelector(".box-button");

button.addEventListener("click", () => {
  statusBox.style.display = "block";

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  const finalNumber = (weight / Math.pow(height / 100, 2)).toFixed(1);

  numberResult.innerHTML = finalNumber;

  if (finalNumber < 16) {
    statusResult.innerHTML = "Severely Underweight";
    statusResult.style.color = "#FFE189";
    numberResult.style.color = "#FFE189";

  } else if (16 <= finalNumber && finalNumber < 18.4) {
    statusResult.innerHTML = "Underweight";
    statusResult.style.color = "#fed761";
    numberResult.style.color = "#fed761";

  } else if (18.5 <= finalNumber && finalNumber < 24.9) {
    statusResult.innerHTML = "Normal";
    statusResult.style.color = "#54ab42";
    numberResult.style.color = "#54ab42";

  } else if (25 <= finalNumber && finalNumber < 29.9) {
    statusResult.innerHTML = "Overweight";
    statusResult.style.color = "#FFB54C";
    numberResult.style.color = "#FFB54C";

  } else if (30 <= finalNumber && finalNumber < 34.9) {
    statusResult.innerHTML = "Moderately Obese";
    statusResult.style.color = "#FF6A61";
    numberResult.style.color = "#FF6A61";

  } else if (35 <= finalNumber && finalNumber < 39.9) {
    statusResult.innerHTML = "Severely Obese";
    statusResult.style.color = "#fe5047";
    numberResult.style.color = "#fe5047";

  } else if (finalNumber >= 40) {
    statusResult.innerHTML = "Morbidly Obese";
    statusResult.style.color = "#ff2b20";
    numberResult.style.color = "#ff2b20";

  } else {
    statusResult.innerHTML = "Error";
  }
});
