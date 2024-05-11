const weather = require('weather-js');

const data = {
  ubicacion: "Lima",
}

weather.find({
    search: data.ubicacion,
    degreeType: 'C',
  },

  function(err, result) {
    if (err) {
      console.log(err);
    } else {
      let nombre = result[0].location.name;
      let temperatura = result[0].current.temperature;
      console.log(`Ciudad: ${nombre}\nTemperatura: ${temperatura}`);
    }
  });