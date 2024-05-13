const weather = require('weather-js');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/buscar', (req, res) => {
  const ciudad = req.query.ciudad;
  weather.find({
    search: ciudad,
    degreeType: 'C',
  },
  
  function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor');
      } else {
        let nombre = result[0].location?.name;
        let temperatura = result[0].current?.temperature;
        let datos = result[0].current?.date;

        res.json({ nombre, temperatura, datos });
      }
  });
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado en: http:localhost:${PORT}`);
})