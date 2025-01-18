document.addEventListener('DOMContentLoaded', function () {
    
    // Inicializar el temporizador
    let time = 30; // Tiempo inicial (30 minutos)
    const timeDisplay = document.querySelector('.time-display');
    const increaseButton = document.querySelector('#increase-time');
    const decreaseButton = document.querySelector('#decrease-time');
  
    // Actualizar el temporizador en pantalla
    function updateTimeDisplay() {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
  
      // Formato de 00:00
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
  
      timeDisplay.textContent = `${minutes}:${seconds}`;
    }
  
    // Aumentar el tiempo (1 minuto)
    increaseButton.addEventListener('click', function () {
      time += 60; // Añadir 1 minuto
      updateTimeDisplay();
    });
  
    // Disminuir el tiempo (1 minuto)
    decreaseButton.addEventListener('click', function () {
      if (time > 0) {
        time -= 60; // Restar 1 minuto
        updateTimeDisplay();
      }
    });
  
    // Inicializar la visualización del temporizador
    updateTimeDisplay();
  
    // Manejo de los checkbox de ingredientes
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        const ingredientLabel = checkbox.nextElementSibling; // El texto asociado al checkbox
  
        if (checkbox.checked) {
          ingredientLabel.style.textDecoration = 'line-through'; // Tachar el ingrediente
        } else {
          ingredientLabel.style.textDecoration = 'none'; // Eliminar tachado
        }
      });
    });
  });
  