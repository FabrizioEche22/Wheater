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

function temperaturaC() {
  let c = document.getElementById('c-temp');
  let f = document.getElementById('f-temp');
  if(c.checked === true) {
    f.checked = false; 
    f.disabled = false; 
    c.disabled = true; 
  }
}

function temperaturaF() {
  let c = document.getElementById('c-temp');
  let f = document.getElementById('f-temp');
  if(f.checked === true) {
    c.checked = false;
    f.disabled = true
    c.disabled = false
  }
}

document.addEventListener("keydown", enter);
