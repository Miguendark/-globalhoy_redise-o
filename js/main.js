document.addEventListener("DOMContentLoaded", function() {
  // --- Menu Desplegable ---
  const menuButton = document.getElementById("menu-button");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      const menu = document.getElementById("dropdown-menu");
      if (menu) {
        menu.classList.toggle("hidden");
      }
    });
  }

  // --- Detección de País y Carga de Idioma ---
  detectCountryAndSetLanguage();

  // --- Cargar Últimas Noticias (Placeholder) ---
  loadLatestNews();
});

function detectCountryAndSetLanguage() {
  fetch("https://ipapi.co/json/")
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la API de geolocalización no fue exitosa.');
      }
      return response.json();
    })
    .then(location => {
      const country = location.country_name;
      const countryCode = location.country_code;
      console.log(`País detectado: ${country} (${countryCode})`);

      // Guardamos país en localStorage para usar en otras funciones
      localStorage.setItem('userCountry', countryCode);
      localStorage.setItem('userCountryName', country);

      // Mostrar noticias locales
      const localNewsTitle = document.getElementById("local-news-title");
      if (localNewsTitle) {
        localNewsTitle.innerText = `Noticias en ${country}`;
      }

      // Cargar noticias locales
      loadLocalNews(countryCode);

      // Cargar anuncios
      loadAds(country);

      // Establecer idioma basado en el país
      let langToLoad = 'en'; // Idioma por defecto
      if (countryCode === 'ES' || countryCode === 'MX' || countryCode === 'AR' || countryCode === 'CO' || countryCode === 'PE' || countryCode === 'VE' || countryCode === 'CL') {
        langToLoad = 'es';
      } else if (countryCode === 'FR') {
        langToLoad = 'fr';
      }
      loadLanguage(langToLoad);
    })
    .catch(error => {
      console.error("Error al detectar el país. Usando idioma del navegador.", error);
      // Plan B: Usar el idioma del navegador si la API falla
      const userLang = navigator.language || navigator.userLanguage;
      console.log("Idioma del navegador:", userLang);

      let langToLoad = 'en'; // Idioma por defecto
      if (userLang.startsWith("es")) {
        langToLoad = 'es';
      } else if (userLang.startsWith("fr")) {
        langToLoad = 'fr';
      }
      loadLanguage(langToLoad);
    });
}

function loadLanguage(lang) {
  fetch(`i18n/${lang}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo de idioma: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Traducir texto de elementos
      document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (data[key]) {
          el.innerHTML = data[key];
        }
      });

      // Traducir placeholders
      document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (data[key]) {
          el.placeholder = data[key];
        }
      });
    })
    .catch(error => {
      console.error('Error en la carga del idioma:', error);
    });
}

function loadLocalNews(countryCode) {
  const localNewsContainer = document.getElementById('local-news');
  if (!localNewsContainer) return;

  // Usamos un país por defecto si el detectado no tiene noticias
  const supportedCountries = ['ES', 'US', 'DO']; 
  const countryToLoad = supportedCountries.includes(countryCode) ? countryCode : 'US';

  fetch(`public/noticias/${countryToLoad}.json`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`No se pudieron cargar las noticias para ${countryToLoad}`);
      }
      return res.json();
    })
    .then(data => {
      localNewsContainer.innerHTML = ''; // Limpiar contenedor
      data.forEach(noticia => {
        const div = document.createElement('div');
        div.className = 'news-item'; // Añadir una clase para estilizar
        div.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.descripcion}</p>`;
        localNewsContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error al cargar noticias locales:', error);
      localNewsContainer.innerHTML = '<p>No se pudieron cargar las noticias en este momento.</p>';
    });
}

function loadAds(country) {
  const adsContainer = document.getElementById("ads");
  if (!adsContainer) return;

  if (country === "Dominican Republic") {
    adsContainer.innerHTML = "<p>Anuncio para RD</p>";
  } else if (country === "Spain") {
    adsContainer.innerHTML = "<p>Publicidad para España</p>";
  } else {
    adsContainer.innerHTML = "<p>Anuncio genérico</p>"; // Anuncio por defecto
  }
}

function loadLatestNews() {
  const latestNewsList = document.getElementById('lista-noticias');
  if (!latestNewsList) return;

  fetch('public/noticias/latest.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar las últimas noticias: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      latestNewsList.innerHTML = '';
      data.forEach(newsItem => {
        const li = document.createElement('li');
        const url = newsItem.url || '#';
        li.innerHTML = `<h4><a href="${url}" target="_blank">${newsItem.titulo}</a></h4>`;
        latestNewsList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar las últimas noticias:', error);
      latestNewsList.innerHTML = '<li>No se pudieron cargar las últimas noticias.</li>';
    });
}