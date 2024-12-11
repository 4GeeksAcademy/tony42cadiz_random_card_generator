/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function random(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let numeros = [
  "A",
  "J",
  "Q",
  "K",
  "10",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

let palos = ["♦", "♥", "♠", "♣"];

function actualizarCarta() {
  let paloRandom = random(palos);
  let numeroRandom = random(numeros);

  document.getElementById("top-suit").textContent = paloRandom;
  document.getElementById("card-number").textContent = numeroRandom;
  document.getElementById("butom-suit").textContent = paloRandom;

  if (paloRandom === "♦" || paloRandom === "♥") {
    document.getElementById("top-suit").style.color = "red";
    document.getElementById("butom-suit").style.color = "red";
  } else {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("butom-suit").style.color = "black";
  }
}

actualizarCarta();
