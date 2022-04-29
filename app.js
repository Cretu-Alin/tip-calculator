const billAmount = document.querySelector(".bill-amount");
const tips = document.querySelectorAll(".tip");
const customTip = document.querySelector(".custom");
const numberOfPeople = document.querySelector(".people-tip");
const tipAmount = document.querySelector(".total-tip");
const totalTip = document.querySelector(".total");
const resetButton = document.querySelector("button");

let totalBill = 0;
let numberOfPersons = 1;
let tip = 0;
let tipsArray = Array.from(tips);

const billValueHandler = (e) => {
  totalBill = Number(e.target.value);
  updateUi();
};

const numberOfPeopleHandler = (e) => {
  numberOfPersons = Number(e.target.value);
  updateUi();
};

const tipsHandler = (e) => {
  tipsArray.forEach((element) => {
    element.addEventListener("click", () => {
      tipsArray.filter((item) => {
        item !== element;
        item.classList.remove("active");
        customTip.value = "";
      });
      element.classList.add("active");

      calculateTipPercentage(element.textContent);
      updateUi();
    });
  });
};

const calculateTipPercentage = (param) => {
  const lastChar = param.charAt(param.length - 1);
  if (lastChar === "%") {
    tip = Number(param.slice(0, -1) / 100);
    console.log(tip);
  } else {
    tip = Number(param / 100);
  }
};

const updateUi = (e) => {
  tipAmount.textContent = ((totalBill * tip) / numberOfPersons).toFixed(2);
  totalTip.textContent = (
    (totalBill * tip) / numberOfPersons +
    totalBill / numberOfPersons
  ).toFixed(2);
};

const customTipHandler = (e) => {
  calculateTipPercentage(e.target.value);
  updateUi();
  removeActiveClass();
};

const removeActiveClass = () => {
  tipsArray.forEach((element) => {
    element.classList.remove("active");
  });
};

const resetHandler = () => {
  removeActiveClass();
  billAmount.value = null;
  totalBill = 0;
  tip = 0;
  numberOfPersons = 1;
  numberOfPeople.value = null;
  customTip.value = null;
  tipAmount.textContent = "$";
  totalTip.textContent = "$";
};

document.addEventListener("DOMContentLoaded", tipsHandler);
billAmount.addEventListener("input", billValueHandler);
numberOfPeople.addEventListener("input", numberOfPeopleHandler);
customTip.addEventListener("input", customTipHandler);
resetButton.addEventListener("click", resetHandler);
