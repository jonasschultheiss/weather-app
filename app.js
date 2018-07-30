const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'Address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(results.lat, results.lng, (errorMessage, weatherResult) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else if (weatherResult.temperature !== weatherResult.apparentTemperature) {
        console.log(
          `weather for ${results.address.toLowerCase()}\nit's currently ${weatherResult.temperature}. it feels like ${
            weatherResult.apparentTemperature
          }`
        );
      } else {
        console.log(`it's currently ${weatherResult.temperature}`);
      }
    });
  }
});
