function registrarVisita(idNoticia) {
  let historial = JSON.parse(localStorage.getItem('historial')) || [];
  historial.push({ id: idNoticia, fecha: new Date().toISOString() });
  localStorage.setItem('historial', JSON.stringify(historial));
}

function obtenerHistorial() {
  return JSON.parse(localStorage.getItem('historial')) || [];
}

function limpiarHistorial() {
  localStorage.removeItem('historial');
}