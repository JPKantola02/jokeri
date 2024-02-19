// functions.js

// Lue käyttöliittymän elementit muuttujiin
const uusiRiviButton = document.getElementById('uusiRiviButton');
const jokeriContainer = document.getElementById('jokeriContainer');
const rivienMaaraElement = document.getElementById('rivienMaara');
let arvottujenRivienMaara = 0;

// Kuuntelija painikkeen painamistapahtumalle
uusiRiviButton.addEventListener('click', lisaaUusiRivi);

// Kuuntelija kutsuu funktiota, joka lisää uuden rivin HTML-taulukkoon
function lisaaUusiRivi() {
  arvottujenRivienMaara++;
  // Luo uusi div-elementti ja lisää siihen jokainen numero omassa "kuplassaan"
  const newDiv = document.createElement('div');
  newDiv.classList.add('jokeriRow');
  newDiv.id = 'jokeriRow' + arvottujenRivienMaara;
  for (let i = 0; i < 7; i++) {
    const randomNumero = Math.floor(Math.random() * 10);
    const bubble = document.createElement('div');
    bubble.classList.add('jokeriBubble');
    bubble.textContent = randomNumero;
    newDiv.appendChild(bubble);
  }
  jokeriContainer.appendChild(newDiv);
  // Päivitä näyttöön arvottujen rivien määrä
  rivienMaaraElement.textContent = `Arvottuja rivejä: ${arvottujenRivienMaara}`;
}
