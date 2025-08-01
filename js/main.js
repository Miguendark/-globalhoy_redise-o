document.addEventListener('DOMContentLoaded', () => {
  // Lógica para el menú desplegable de usuario
  const userMenuButton = document.querySelector('.user-menu-button');
  const userDropdownMenu = document.querySelector('.user-dropdown-menu');

  if (userMenuButton && userDropdownMenu) {
    userMenuButton.addEventListener('click', () => {
      userDropdownMenu.classList.toggle('show');
    });

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', (event) => {
      if (!userDropdownMenu.contains(event.target) && event.target !== userMenuButton) {
        userDropdownMenu.classList.remove('show');
      }
    });
  }

  // Lógica para el buscador
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

  // Lógica para el banner de API simulada
  const banner = document.getElementById("api-simulada-banner");
  const usandoApiReal = false; // ⚠️ CAMBIA a true cuando conectes tu API real
  if (usandoApiReal) {
    banner.classList.add("hidden");
  }

  // Funciones de marcador de posición para el menú de usuario
  window.cambiarPais = function() {
    alert('Función: Cambiar país');
  };

  window.cambiarIdioma = function() {
    alert('Función: Cambiar idioma');
  };

  window.verFavoritos = function() {
    alert('Función: Ver favoritos');
  };

  window.verHistorial = function() {
    alert('Función: Ver historial');
  };

  window.verNotificaciones = function() {
    alert('Función: Ver notificaciones');
  };

  window.cerrarSesion = function() {
    alert('Función: Cerrar sesión');
  };
});