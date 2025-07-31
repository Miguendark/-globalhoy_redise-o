function guardarFavorito(idNoticia) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (!favoritos.includes(idNoticia)) {
    favoritos.push(idNoticia);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
}

function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos')) || [];
}

function eliminarFavorito(idNoticia) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  favoritos = favoritos.filter(id => id !== idNoticia);
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}