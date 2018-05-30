const request = require('request');
const settings = require('./settings.js');

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${settings.address}&key=${settings.apiKey}`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});
console.log();