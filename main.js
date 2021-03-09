//Genero 16 numeri casuali tra 1 e 100
//for (var i = 0; i < 16; i++) {

//0}

//creare una function che genera un numero casuale
function numerorandom (){
   (Math.floor(Math.random() * 101))
   return (Math.floor(Math.random() * 101))
}

//salvare il risultato in una variabile esterna dove richiamo la funzione
var numeroF = numerorandom;

//stampo la variabile
console.log(numeroF);

//Creo un array dove verranno pushati 16 numeri
var numeri = [];

//creare un while dove : condizione: array.length<16
while (numeri.length<16) {
  numeri.push(numeroF)
}

//stampo tutto l'array
console.log(numeri);


//Chiedo all'utente di inserire un numero
var utente = prompt("Inserisci un numero");

//for (var i = 0; i < 100; i++) {
  //  numeri.push(utente)[i]
  //}
