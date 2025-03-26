

let prompt = require('prompt-sync')();

let minutos = Number(prompt('Digite o tempo em minutos: '));
let velKnots = Number(prompt('Digite a velocidade em nós: '));

let velKmH = velKnots * 1.852;  // Convertendo nós para km/h
let distancia = velKmH * (minutos / 60); // Convertendo minutos para horas

console.log(`Distância percorrida: ${distancia.toFixed(2)} km`);