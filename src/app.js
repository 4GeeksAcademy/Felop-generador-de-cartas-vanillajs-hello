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
  { symbol: "♥", color: "red" }, // Corazones
  { symbol: "♦", color: "red" }, // Diamantes
  { symbol: "♣", color: "black" }, // Tréboles
  { symbol: "♠", color: "black" } // Picas
];

const card = document.getElementById("card");
const topSuit = document.getElementById("top-suit");
const bottomSuit = document.getElementById("bottom-suit");
const value = document.getElementById("value");

function generateCard() {
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  value.textContent = randomValue;
  topSuit.textContent = randomSuit.symbol;
  bottomSuit.textContent = randomSuit.symbol;

  topSuit.classList = randomSuit.color;
  bottomSuit.classList = randomSuit.color;
  value.classList = randomSuit.color;
}

window.onload = generateCard;
