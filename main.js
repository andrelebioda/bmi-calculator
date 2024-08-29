//elements
const radioBtn = document.querySelectorAll('.calculator-container .radio-group .radio input[type="radio"]');
const metricContainer = document.querySelector(".input-container .metric");
const imperialContainer = document.querySelector(".input-container .imperial");
const notHealthy = document.querySelector("#not");

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
  if (
    isNaN(event.key) &&
    event.key !== "Backspace" &&
    event.key !== "." &&
    event.key !== "ArrowRight" &&
    event.key !== "ArrowLeft" &&
    event.keyCode !== 9
  ) {
    event.preventDefault();
  }
};

const calculateMetric = () => {
  const valueCM = parseInt(inputCM.value);
  const valueKG = parseFloat(inputKG.value);

  let bmi = 0;

  if (!isNaN(valueCM) && !isNaN(valueKG)) {
    bmi = valueKG / ((valueCM / 100) * (valueCM / 100));

    let minWeightValue = (valueCM / 100) * (valueCM / 100) * 18.5;
    let maxWeightValue = (valueCM / 100) * (valueCM / 100) * 25;

    welcomeSection.classList.add("hide");
    resultSection.classList.remove("hide");

    bmiCount.textContent = bmi.toFixed(1);
    minWeight.textContent = minWeightValue.toFixed(1) + "kgs";
    maxWeight.textContent = maxWeightValue.toFixed(1) + "kgs";
  } else {
    welcomeSection.classList.remove("hide");
    resultSection.classList.add("hide");
  }

  showNotHealthy(bmi);
};

const calculateImperial = () => {
  const valueFT = parseInt(inputFT.value);
  const valueIN = parseInt(inputIN.value);
  const valueST = parseInt(inputST.value);
  const valueLBS = parseInt(inputLBS.value);

  if (!isNaN(valueFT) && !isNaN(valueIN) && !isNaN(valueST) && !isNaN(valueLBS)) {
    let st = valueST / 1;
    let lb = valueLBS / 1;

    let weight = (st + lb / 14) * 6.35029318;

    let ft = valueFT / 1;
    let inch = valueIN / 1;

    let height = (ft + inch / 12) / 3.28;

    console.log(valueFT);

    bmi = weight / (height * height);

    let minWeightValue = (18.5 * (height * height)) / 6.35;
    let maxWeightValue = (25 * (height * height)) / 6.35;

    console.log(minWeightValue);

    welcomeSection.classList.add("hide");
    resultSection.classList.remove("hide");

    bmiCount.textContent = bmi.toFixed(1);
    minWeight.textContent = minWeightValue.toFixed(1) + "st";
    maxWeight.textContent = maxWeightValue.toFixed(1) + "st";
  } else {
    welcomeSection.classList.remove("hide");
    resultSection.classList.add("hide");
  }
  showNotHealthy(bmi);
};

const showNotHealthy = (bmi) => {
  if (bmi < 18.5 || bmi > 24.9) {
    notHealthy.classList.remove("hide");
  } else {
    notHealthy.classList.add("hide");
  }
};
