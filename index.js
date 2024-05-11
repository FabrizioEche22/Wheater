const weather = require('weather-js');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/buscar', (req, res) => {
  const ciudad = req.query.ciudad;
  console.log(ciudad)
  weather.find({
    search: ciudad,
    degreeType: 'C',
  },
  
  function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor');
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