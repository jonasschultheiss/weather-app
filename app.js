const yargs = require('yargs');
const axios = require('axios');
const settings = require('./settings');

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

axios
  .get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}&key=${settings.mapApiKey}`
  )
  .then(response => {
    return axios
      .get(
        `https://api.darksky.net/forecast/${settings.weatherApiKey}/${response.data.results[0].geometry.lat},${
          response.data.results[0].geometry.lng
        }`
      )
      .then(response => {});
  })
  .catch(error => {
    console.log(JSON.stringify(error, udnefined, 2));
  });
