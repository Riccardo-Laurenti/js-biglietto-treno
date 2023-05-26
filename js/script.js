/*   Stampo a schermo*/
console.log('JS OK!');


/*   Recupero elemento dal DOM */

const recElement = document.getElementById('target-train');


/*   Il programma dovrà chiedere all'utente :
     - il numero di chilometri che vuole percorrere 
     - e l'età del passeggero.  */


const userKm = parseInt(prompt("Inserisco i km da percorrere", 20));

const userAge = parseInt(prompt ("Inserisco l'età dell'utente", 28));


console.log('KM da percorrere', userKm, typeof userKm);
console.log('Età utente', userAge, typeof userAge);
