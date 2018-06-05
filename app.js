// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'Address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, `undefinded`, 2))
//     }
// });

const settings = require('./settings');
const request = require('request');
const parser = require('./parseWeatherApi');

request({
    url: `https://api.darksky.net/forecast/${settings.weatherApiKey}/47.4819119,7.5448507`,
    json: true
}, (error, response, body) => {
    console.log(body.currently.temperature);
    console.log(parser.fahrToCels(body.currently.temperature));
});