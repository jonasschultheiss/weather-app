const request = require('request');
const settings = require('./settings.js');
const yargs = require('yargs');

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
    .alias('help', 'h')
    .argv;

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${settings.address}&key=${settings.apiKey}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`lat: ${body.results[0].geometry.location.lat}`);
    console.log(`lng: ${body.results[0].geometry.location.lng}`);
});