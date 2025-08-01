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

  // Funcionalidad del menú de navegación principal (☰ Usuario)
  const toggleMenuButton = document.getElementById('toggleMenu');
  const menuUsuario = document.getElementById('menuUsuario');

  if (toggleMenuButton && menuUsuario) {
    console.log("main.js: Botón de menú principal y menú de usuario encontrados.");
    toggleMenuButton.addEventListener('click', () => {
      console.log("main.js: Clic en el botón de menú principal.");
      menuUsuario.classList.toggle('show');
    });

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', (event) => {
      if (!menuUsuario.contains(event.target) && event.target !== toggleMenuButton) {
        console.log("main.js: Clic fuera del menú principal. Cerrando menú.");
        menuUsuario.classList.remove('show');
      }
    });
  } else {
    console.warn("main.js: Elementos del menú principal no encontrados.", { toggleMenuButton, menuUsuario });
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

  // Lógica para cargar noticias en la página principal
  function cargarNoticiasPrincipal() {
    const noticiasContainer = document.getElementById('widgetNoticias');
    if (!noticiasContainer) return;

    fetch('public/noticias/detalles.json')
      .then(response => response.json())
      .then(data => {
        noticiasContainer.innerHTML = ''; // Limpiar contenido existente
        data.forEach(noticia => {
          const newsCard = document.createElement('div');
          newsCard.className = 'widget-card';
          newsCard.innerHTML = `
            <img class="widget-image" src="${noticia.imagen}" alt="${noticia.titulo}">
            <div class="widget-header">${noticia.titulo}</div>
            <p>${noticia.descripcion}</p>
            <a href="noticia_detalle.html?id=${noticia.id}" class="btn-accion">Leer más</a>
          `;
          noticiasContainer.appendChild(newsCard);
        });
      })
      .catch(error => console.error('Error cargando noticias principales:', error));
  }

  cargarNoticiasPrincipal(); // Llamar a la función al cargar la página
});