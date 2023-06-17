


// ESERCIZIO 2 JS BIGLIETTO -TRENO -FORM :



// APPLICO SCONTO - 
// SCONTO 20% minorenni
// SCONTO 40% over 65
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.



        var kilometers = parseInt(prompt('Inserisci il numer di km da fare'));

        var age = parseInt(prompt('Inserisci la tua età'));
        
        var pricekm = 0.21;
        
        var price = kilometers * pricekm;
        
        var price20 = price / 100 * 20;
        
        var price40 = price / 100 * 40;
        
        
        console.log(kilometers)
        console.log(age)
        
        
        if (age < 18) {

          console.log('Il prezzo è ' + price20.toFixed(2) + '€ con sconto del 20% per under 18');
        }
        else if (age > 64) {

          console.log('Il prezzo è ' + price40.toFixed(2) + ' con sconto del 40% per over 65');
        }
        else {

          console.log('Il prezzo è ' + price.toFixed(2));
        }
