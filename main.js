//Elemente
const radioBtn = document.querySelectorAll('.calculator-container .radio-group .radio input[type="radio"]');
const metricContainer = document.querySelector(".input-container .metric");
const imperialContainer = document.querySelector(".input-container .imperial");

//Events
radioBtn.forEach((btn) => btn.addEventListener("click", (event) => showContainer(event)));

//Functions
const showContainer = (event) => {
  const id = event.target.id;

  if (id == "metric") {
    metricContainer.classList.remove("hide");
    imperialContainer.classList.add("hide");
  } else {
    metricContainer.classList.add("hide");
    imperialContainer.classList.remove("hide");
  }
};
