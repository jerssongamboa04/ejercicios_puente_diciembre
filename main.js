

/* CONDICIONALES */


// Ejercicio 1
let angulo1 = 72;
let angulo2 = 36;
let angulo3 = 72;



if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("angulo acutángulo");

} else if (angulo1 > 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("angulo obtusángulo");

} else if (angulo1 = 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("angulo rectangulo");

} else {
    console.log("No es un triangulo");
}


// Ejercicio 2

let nota = prompt("ingrese la nota por favor:");

if (nota >= 0 && nota <= 69) {
    console.log("suspenso");

} else if (nota >= 60 && nota <= 79) {
    console.log("Aprobado");

} else if (nota >= 80 && nota <= 89) {
    console.log("Sobresaliente");

} else {
    console.log("Formato de nota incorrecto")
}

// Ejercicio 3 


let language = prompt("Hello World");

if (language == "es") {
    console.log("Hola mundo!");

} else if (language == "fr") {
    console.log("Bonjour tout le monde!");

} else if (language == "en") {
    console.log("Hello World!");

} else if (language == "de") {
    console.log("Hallo Welt!");

} else {
    console.log("Sorry, language not available");
}


// Ejercicio 4 

let age = prompt ("Age:");
let Nationality= prompt ("Nationality");

if (age >= 18 && Nationality== "española"){

    console.log ("Puede Votar");

}else {
    console.log ("No puede Votar");
}


// Ejercicio 5




/* STRINGS */

// Ejercicio 6

let text = prompt ("escriba un texto");
console.log(text.replaceAll(" ",""));

// Ejercicio 7

let string = "pámpano";

function reverseString(str) {
  let arrStr = str.split("");

  return arrStr.reverse().join("");
}

console.log(reverseString(string)); 
 