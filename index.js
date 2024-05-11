const weather = require('weather-js');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/buscar', (req, res) => {
  weather.find({
    search: "Lima",
    degreeType: 'C',
  },
  
  function (err, result) {
      if (err) {
        console.log(err);
      } else {
        let nombre = result[0].location?.name || 'Nada';
        let temperatura = result[0].current?.temperature || 'Nada';
        res.json({ nombre, temperatura })
      }
  });
})

app.listen(PORT, () => {
  console.log('Servidor en el puerto '+ PORT);
})