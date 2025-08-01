// apiSimuladaBanner.js
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("api-simulada-banner");

  const usandoApiReal = false; // ⚠️ CAMBIA a true cuando conectes tu API real

  if (usandoApiReal) {
    banner.classList.add("hidden");
  }

  // Funcionalidad del buscador
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');

  if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
      const query = searchInput.value;
      if (query) {
        alert(`Buscando: ${query}`);
        // Aquí iría la lógica real de búsqueda
      }
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
          alert(`Buscando: ${query}`);
          // Aquí iría la lógica real de búsqueda
        }
      }
    });
  }
});