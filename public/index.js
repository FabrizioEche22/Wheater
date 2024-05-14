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
