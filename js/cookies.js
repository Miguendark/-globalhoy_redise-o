function setCookie(name, value, days = 30) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/;`;
}

function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let cookie of cookieArr) {
    let [key, val] = cookie.trim().split('=');
    if (key === name) return val;
  }
  return null;
}

// Uso sugerido
// setCookie('lang', 'es');
// let lang = getCookie('lang');