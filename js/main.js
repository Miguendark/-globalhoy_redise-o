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

  // Funcionalidad del menú de usuario
  const settingsButton = document.getElementById('settings-button');
  const userDropdown = document.getElementById('userDropdown');

  if (settingsButton && userDropdown) {
    settingsButton.addEventListener('click', (event) => {
      userDropdown.classList.toggle('show');
      event.stopPropagation(); // Evita que el clic se propague a window y cierre el menú
    });

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', (event) => {
      if (!userDropdown.contains(event.target) && event.target !== settingsButton) {
        userDropdown.classList.remove('show');
      }
    });
  }

  // Funciones de marcador de posición para el menú de usuario (si no están en otro archivo)
  window.cambiarPais = function() {
    alert('Función: Cambiar país');
    // Aquí iría la lógica para mostrar el modal de país o la página de selección
  };

  window.cambiarIdioma = function() {
    alert('Función: Cambiar idioma');
    // Aquí iría la lógica para mostrar el modal de idioma o la página de selección
  };

  window.verFavoritos = function() {
    alert('Función: Ver favoritos');
    // Aquí iría la lógica para ver los favoritos
  };

  window.verHistorial = function() {
    alert('Función: Ver historial');
    // Aquí iría la lógica para ver el historial
  };

  window.verNotificaciones = function() {
    alert('Función: Ver notificaciones');
    // Aquí iría la lógica para mostrar las notificaciones
  };

  window.cerrarSesion = function() {
    alert('Función: Cerrar sesión');
    // Aquí iría la lógica para cerrar la sesión
  };
});