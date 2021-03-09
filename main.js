//Genero 16 numeri casuali tra 1 e 100
for (var i = 0; i < 16; i++) {
  i = Math.floor(Math.random() * 101)
  console.log(i);
}



//Chiedo all'utente di inserire un numero
var utente = prompt("Inserisci un numero");

//Creo un array dove verra
var numeri = [];

//for (var i = 0; i < 100; i++) {
//  numeri.push(utente)[i]
//}
