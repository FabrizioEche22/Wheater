const weather = require('weather-js');

const data = {
  ubicacion: "Lima",
}

weather.find({
  search: data.ubicacion,
  degreeType: 'C',
},

  function(err, result) {
    if (err) console.log(err);
    let resultadoFinal = JSON.stringify(result, null, 2);
    console.log(resultadoFinal);
  });