function abrirConfig() {
  let config = document.getElementById('config');
  let toolIcon = document.getElementById('icon');
  if(config.style.display === 'none') {
    config.style.display = 'block';
    toolIcon.style.transform = 'rotate(-126deg)';
  } else {
    config.style.display = 'none';
    toolIcon.style.transform = 'rotate(126deg)';
  }
}

function enter(event) {
  if (event.keyCode === 13) {
    var inputValue = document.getElementById('input').value;
    if (inputValue.trim() === '') {
      console.log('No hay nada escrito');
    } else {
      buscarClima();
    }
  }
}

document.addEventListener("keydown", enter);
