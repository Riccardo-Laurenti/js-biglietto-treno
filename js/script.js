
/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */



// Quanti chilometri vuoi percorrere?
let userKm = parseInt('Quanto è lungo il tuo viaggio in km?');
console.log(userKm);

// Età del passeggero?
let userAge = parseInt('Quanti anni hai?');
console.log(userAge);

// Prezzo totale del viaggio per persone tra i 19 e 64 anni
// 0.21€ al km


// APPLICO SCONTO
// SCONTO 20% minorenni
// SCONTO 40% over 65

if (userAge <= 18) {
  let ticketPrice = userKm * 0.21;
  let calcScountUnder = ((ticketPrice * 20) / 100 );
  let ticketUnder = ticketPrice - calcScountUnder;
  console.log(ticketUnder);
} 
else if (userAge >= 65) {
  let ticketPrice = userKm * 0.21;
  let calcScountOver = ((ticketPrice * 40) / 100 );
  let ticketOver = ticketPrice - calcScountOver;
  console.log(ticketOver);
}

else if (userAge>=18 && userAge<=65) {
  let ticketPrice = userKm * 0.21;
  console.log(ticketPrice);
}


// ESERCIZIO 2 JS BIGLIETTO -TRENO -FORM :


// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.


