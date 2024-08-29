//elements
const radioBtn = document.querySelectorAll('.calculator-container .radio-group .radio input[type="radio"]');
const metricContainer = document.querySelector(".input-container .metric");
const imperialContainer = document.querySelector(".input-container .imperial");

//inputs
const inputCM = document.querySelector(".input-container #height-cm");
const inputKG = document.querySelector(".input-container #weight-kg");
const inputFT = document.querySelector(".input-container #height-ft");
const inputIN = document.querySelector(".input-container #height-in");
const inputST = document.querySelector(".input-container #weight-st");
const inputLBS = document.querySelector(".input-container #weight-lbs");

//result container
const welcomeSection = document.querySelector(".result-container .welcome");
const resultSection = document.querySelector(".result-container #result");
const bmiCount = document.querySelector(".result-container #bmi-count");
const minWeight = document.querySelector(".result-container #minWeight");
const maxWeight = document.querySelector(".result-container #maxWeight");

//Events
radioBtn.forEach((btn) => btn.addEventListener("click", (event) => showContainer(event)));

[inputCM, inputKG].forEach((input) => input.addEventListener("input", () => calculateMetric()));
[inputFT, inputIN, inputST, inputLBS].forEach((input) => input.addEventListener("input", () => calculateImperial()));

[inputCM, inputKG, inputFT, inputIN, inputST, inputLBS].forEach((input) => {
  input.addEventListener("keydown", (event) => checkInput(event));
});

//Functions
const showContainer = (event) => {
  const id = event.target.id;

  if (id === "metric") {
    metricContainer.classList.remove("hide");
    imperialContainer.classList.add("hide");

    inputFT.value = "";
    inputIN.value = "";
    inputLBS.value = "";
    inputST.value = "";
    bmiCount.textContent = "-";
  } else {
    metricContainer.classList.add("hide");
    imperialContainer.classList.remove("hide");

    inputCM.value = "";
    inputKG.value = "";
    bmiCount.textContent = "-";
  }
};

const checkInput = (event) => {
  if (isNaN(event.key) && event.key !== "Backspace" && event.key !== "." && event.keyCode !== 9) {
    event.preventDefault();
  }
};

const calculateMetric = () => {
  const valueCM = parseInt(inputCM.value);
  const valueKG = parseFloat(inputKG.value);

  if (!isNaN(valueCM) && !isNaN(valueKG)) {
    const bmi = valueKG / ((valueCM / 100) * (valueCM / 100));

    welcomeSection.classList.add("hide");
    resultSection.classList.remove("hide");

    bmiCount.textContent = bmi.toFixed(1);
  } else {
    welcomeSection.classList.remove("hide");
    resultSection.classList.add("hide");
  }
};

const calculateImperial = () => {
  const valueFT = parseInt(inputFT.value);
  const valueIN = parseInt(inputIN.value);
  const valueST = parseInt(inputST.value);
  const valueLBS = parseInt(inputLBS.value);

  if (!isNaN(valueFT) && !isNaN(valueIN) && !isNaN(valueST) && !isNaN(valueLBS)) {
    const bmi = valueKG / ((valueCM / 100) * (valueCM / 100));

    welcomeSection.classList.add("hide");
    resultSection.classList.remove("hide");

    bmiCount.textContent = bmi.toFixed(1);
  } else {
    welcomeSection.classList.remove("hide");
    resultSection.classList.add("hide");
  }
};
