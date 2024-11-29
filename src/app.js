/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = [
  { symbol: "♥", color: "red" },
  { symbol: "♦", color: "red" },
  { symbol: "♣", color: "black" },
  { symbol: "♠", color: "black" }
];

const card = document.getElementById("card");
const topSuit = document.getElementById("top-suit");
const bottomSuit = document.getElementById("bottom-suit");
const value = document.getElementById("value");
const timerDisplay = document.getElementById("timer");

let countdown = 10;
let timer;
const generateBtn = document.getElementById("generate-btn");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");

function generateCard() {
  let randomValue = values[Math.floor(Math.random() * values.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  value.textContent = randomValue;
  topSuit.textContent = randomSuit.symbol;
  bottomSuit.textContent = randomSuit.symbol;

  topSuit.classList = randomSuit.color;
  bottomSuit.classList = randomSuit.color;
  value.classList = randomSuit.color;

  resetCountdown();
}

function resizeCard() {
  const width = widthInput.value || 250;
  const height = heightInput.value || 400;
  card.style.width = `${width}px`;
  card.style.height = `${height}px`;
}
generateBtn.addEventListener("click", generateCard);

widthInput.addEventListener("input", resizeCard);
heightInput.addEventListener("input", resizeCard);

function resetCountdown() {
  clearInterval(timer);
  countdown = 10;
  timerDisplay.textContent = `Próximo cambio en: ${countdown}s`;

  timer = setInterval(() => {
    countdown--;
    timerDisplay.textContent = `Próximo cambio en: ${countdown}s`;

    if (countdown === 0) {
      generateCard();
    }
  }, 1000);
}

window.onload = () => {
  generateCard();
  resetCountdown();
};
