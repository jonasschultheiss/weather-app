const settings = require('../settings');
const tuc = require('temp-units-conv');
const request = require('request');

const getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${settings.weatherApiKey}/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: tuc.fahrenheitToCelsius(body.currently.temperature).toFixed(1),
          apparentTemperature: tuc.fahrenheitToCelsius(body.currently.apparentTemperature).toFixed(1)
        });
      } else {
        callback('unable to fetch weather');
        console.log(lat, lng);
      }
    }
  );
};

module.exports = { getWeather };
