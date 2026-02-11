// Base de datos local sencilla para simular un sistema transaccional
const db = {
  mario: "Habilidad: Salto Pro. Mundo: Mushroom Kingdom.",
  link: "Habilidad: Maestro de la Espada. Mundo: Hyrule.",
  samus: "Habilidad: Disparo de Plasma. Mundo: Zebes."
};

const btnSearch = document.getElementById('btnSearch');
const inputField = document.getElementById('characterInput');
const resultArea = document.getElementById('resultArea');

btnSearch.addEventListener('click', () => {
  const query = inputField.value.toLowerCase().trim();
  
  if (db[query]) {
    resultArea.innerHTML = `<h2>${query.toUpperCase()}</h2><p>${db[query]}</p>`;
    resultArea.style.borderColor = "#4ecca3"; // Cambia a verde si lo encuentra
  } else {
    resultArea.innerHTML = `<p>Error 404: Personaje no encontrado en la base de datos.</p>`;
    resultArea.style.borderColor = "#e94560"; // Rojo si falla
  }
});