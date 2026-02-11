// Base de datos local sencilla para simular un sistema transaccional
const db = {
  mario: "Habilidad: Salto Pro. Mundo: Mushroom Kingdom.",
  link: "Habilidad: Maestro de la Espada. Mundo: Hyrule.",
  samus: "Habilidad: Disparo de Plasma. Mundo: Zebes.",
  epstein: "Habilidad: Fiestas. Mundo: Little St. James"
};

const btnSearch = document.getElementById('btnSearch');
const inputField = document.getElementById('characterInput');
const resultArea = document.getElementById('resultArea');
const resultPic = document.getElementById('resultPic');

btnSearch.addEventListener('click', () => {
  const query = inputField.value.toLowerCase().trim();
  
  if (db[query]) {
    resultArea.innerHTML = `<h2>${query.toUpperCase()}</h2><p>${db[query]}</p>`;
    resultArea.style.borderColor = "#4ecca3"; // Cambia a verde si lo encuentra
  } else {
    resultArea.innerHTML = `<p>Error 404: Personaje no encontrado en la base de datos.</p>`;
    resultArea.style.borderColor = "#e94560"; // Rojo si falla
  }
  if(query=="epstein"){
    resultPic.src = "https://bloximages.chicago2.vip.townnews.com/myheraldreview.com/content/tncms/assets/v3/editorial/6/d1/6d15b360-aa51-11ee-813a-cfe0461ac9d9/659585226156a.image.jpg?resize=400%2C399";
  }
});
