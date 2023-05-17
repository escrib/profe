function lanzaCuestionario(){

let divCuestionario = document.querySelector(".cuestionario").innerHTML = '';

let ingreso = prompt("Ingresa tu nombre:");
let edad = prompt("Cual es tu edad?");
let anio = prompt("A que año vas? ingresa numero de 1 al 6:");
let previa = prompt("Tenes matematica previa?");
let clases = prompt("Queres clases personales?");
let cursada = 6;
let aniosFaltan = cursada - anio;

divCuestionario = document.querySelector(".cuestionario");

let newP1 = document.createElement("p");
let newP2 = document.createElement("p");
let newP3 = document.createElement("p");
let newP4 = document.createElement("p");
let newP5 = document.createElement("p");
let newP6 = document.createElement("p");

let ingresado = document.createTextNode('Hola ' + ingreso + ' bienvenid@!!');       
newP1.appendChild(ingresado);
divCuestionario.appendChild(newP1);

let edado = document.createTextNode('Tenes ' + edad + ' años.');
newP2.appendChild(edado);
divCuestionario.appendChild(newP2);

let aniado = document.createTextNode('Vas a ' + anio + '° año.');
newP3.appendChild(aniado);
divCuestionario.appendChild(newP3);

let previado = document.createTextNode('Tenes matematica previa: ' + previa + '.');
newP4.appendChild(previado);
divCuestionario.appendChild(newP4);

let claseado = document.createTextNode('Queres clases personales: ' + clases + '.');
newP5.appendChild(claseado);
divCuestionario.appendChild(newP5);

let falteado = document.createTextNode('Te quedan: ' + aniosFaltan + 'años para terminar el colegio!');
newP6.appendChild(falteado);
divCuestionario.appendChild(newP6);

document.getElementById('cuestionario').style.display = "block";

}