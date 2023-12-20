// ! ALGORITMO CALCOLO BIGLIETTO TRENO - developed by Riccardo Laurenti | Full Stack Web Developer

const askKmUser = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));


const userAge = parseInt(prompt("Quanti anni hai ?"));


const priceForKm = 0.21;


const priceTicketOperation = askKmUser * priceForKm;



const agePrint = document.getElementById("age-print")


const distanceRoad = document.getElementById("distance-road");


agePrint.innerHTML = `Età Passeggero: <span>${userAge} Anni</span>`;


distanceRoad.innerHTML = `Distanza viaggio: <span>${askKmUser} Km</span>`;



// Start validation operations and discount calculation with conditional instructions


if (isNaN(askKmUser) || isNaN(userAge) || askKmUser <= 0 || userAge <= 0) {
  alert("Valori sbagliati");
} else {


  const noScountTicket = document.getElementById("price-standard");

  const scountPrint = document.getElementById("with-scount");


  if (userAge > 18 || userAge < 65) {
    noScountTicket.innerHTML = `Prezzo biglietto Standard: <span>${priceTicketOperation.toFixed(2)}€</span>`;
  }

  let pricewithScount = false;

  if (userAge <= 18) {
    pricewithScount = priceTicketOperation * 0.8;
    scountPrint.innerHTML = `Prezzo biglietto con Sconto del 20%: <span>${pricewithScount.toFixed(2)}€</span>`;
  }

  if (userAge >= 65) {
    pricewithScount = priceTicketOperation * 0.6;
    scountPrint.innerHTML = `Prezzo biglietto con Sconto del 40%: <span>${pricewithScount.toFixed(2)}€</span>`;
  }

}