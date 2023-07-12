// Evento que se ejecuta cuando el contenido de la página ha sido cargado
window.addEventListener('DOMContentLoaded', (event) => {
  document.body.style.opacity = 1; // Establece la opacidad del cuerpo de la página a 1 para que sea visible
});

// Evento que se ejecuta cuando el contenido de la página ha sido cargado
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = 0; // Establece la opacidad del cuerpo de la página a 0 para ocultarlo
});

// Evento que se ejecuta antes de que el usuario abandone la página
window.addEventListener('beforeunload', function() {
  document.body.style.opacity = 0; // Establece la opacidad del cuerpo de la página a 0 antes de que el usuario abandone la página
});

// Función para alternar el modo oscuro
function toggleDarkMode() {
  const body = document.body; // Obtiene la referencia al elemento body de la página
  body.classList.toggle('dark-mode'); // Alterna la clase 'dark-mode' en el cuerpo de la página para cambiar los estilos relacionados con el modo oscuro
}
