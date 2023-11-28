// ! ALGORITMO CALCOLO BIGLIETTO TRENO - developed by Riccardo Laurenti | Full Stack Web Developer

const agePrint = document.getElementById("age-print")

const distanceRoad = document.getElementById("distance-road");

const askKmUser = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));

const userAge = parseInt(prompt("Quanti anni hai ?"));

const priceForKm = 0.21;

const priceTicketOperation = askKmUser * priceForKm;

const scount20 = 0.8;

const scount40 = 0.6;


agePrint.innerHTML = `Età Passeggero: <span class="green-p">${userAge} Anni</span>`;

distanceRoad.innerHTML = `Distanza viaggio: <span class="green-p">${askKmUser} Km</span>`;

// Start validation operations and discount calculation with conditional instructions

if (isNaN(askKmUser) || isNaN(userAge)) {
  alert("Devi inserire dei numeri!");
} else {


  const noScountTicket = document.getElementById("price-standard");

  const scountPrint = document.getElementById("with-scount");


  if (userAge > 18 || userAge < 65) {
    noScountTicket.innerHTML = `Prezzo biglietto Standard: <span class="green-p">${priceTicketOperation.toFixed(2)}€</span>`;
  }

  let pricewithScount = false;

  if (userAge <= 18) {
    pricewithScount = priceTicketOperation * scount20;
    scountPrint.innerHTML = `Prezzo biglietto con Sconto del 20%: <span class="green-p">${pricewithScount.toFixed(2)}€</span>`;
  }

  if (userAge >= 65) {
    pricewithScount = priceTicketOperation * scount40;
    scountPrint.innerHTML = `Prezzo biglietto con Sconto del 40%: <span class="green-p">${pricewithScount.toFixed(2)}€</span>`;
  }

}