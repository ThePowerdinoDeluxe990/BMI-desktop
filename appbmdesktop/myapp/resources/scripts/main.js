"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button = document.querySelector("#calcular");
var peso = document.querySelector("#peso");
var altura = document.querySelector("#altura");
var result = document.querySelector("#result");
var info = document.querySelector("#info");
function color() {
    info.style.color = "red";
}
function orange() {
    info.style.color = "coral";
}
button.onclick = function () {
    var pesovalue = parseFloat(peso.value);
    var alturavalue = parseFloat(altura.value);
    var maca = (pesovalue / (alturavalue * alturavalue)) * 10000;
    var macaza = maca.toFixed(1);
    result.textContent = macaza.toString();
    if (maca < 18.5) {
        console.log("pesas poco");
        color();
        info.textContent = "pesas poco";
    }
    else if (maca >= 30) {
        color();
        info.textContent = "tienes sobrepeso";
    }
    else if (maca >= 25) {
        orange();
        info.textContent = "pesas un poco mas de lo normal";
    }
    else if (maca <= 25) {
        color();
        info.textContent = "estas bien";
    }
};
//todo el calculo y sus variables
