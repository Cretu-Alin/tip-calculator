const billAmount = document.querySelector(".bill-amount");
const tips = document.querySelectorAll(".tip");
const customTip = document.querySelector(".custom");
const numberOfPeople = document.querySelector(".people-tip");
const tipAmount = document.querySelector(".total-tip");
const totalTip = document.querySelector(".total");
const reset = document.querySelector("button");

let totalBill = 0;
let numberOfPersons = 1;
let tip = 0;
let tipsArray = Array.from(tips);

const billValueHandler = (e) => {
  totalBill = Number(e.target.value);
  calculateTipAmount();
};

const numberOfPeopleHandler = (e) => {
  numberOfPersons = Number(e.target.value);
  calculateTipAmount();
};

const tipsHandler = (e) => {
  tipsArray.forEach((element) => {
    element.addEventListener("click", () => {
      tipsArray.forEach((item) => {
        if (item !== element) {
          item.classList.remove("active");
          customTip.value = "";
        }
      });
      element.classList.add("active");

      switch (element.textContent) {
        case "5%":
          tip = Number(5 / 100);
          break;
        case "10%":
          tip = Number(10 / 100);
          break;
        case "15%":
          tip = Number(15 / 100);
          break;
        case "25%":
          tip = Number(25 / 100);
          break;
        case "50%":
          tip = Number(50 / 100);
          break;
      }
      calculateTipAmount();
    });
  });
};

const calculateTipAmount = (e) => {
  tipAmount.textContent = ((totalBill * tip) / numberOfPersons).toFixed(2);
  totalTip.textContent = (
    (totalBill * tip) / numberOfPersons +
    totalBill / numberOfPersons
  ).toFixed(2);
};

const customTipHandler = (e) => {
  tip = Number(e.target.value / 100);
  calculateTipAmount();
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
reset.addEventListener("click", resetHandler);
