const settings = require('../settings');
const request = require('request');

const geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${settings.mapApiKey}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google server');
        } else if (body.status.toLowerCase() === 'zero_results') {
            callback('unable to find address')
        } else if (body.status.toLowerCase() === 'ok') {
            callback(undefined, {
                address: `address: ${body.results[0].formatted_address}`,
                lat: `lat: ${body.results[0].geometry.location.lat}`,
                lng: `lng: ${body.results[0].geometry.location.lng}`
            });
        }
    });
};

module.exports = {
    geocodeAddress
};