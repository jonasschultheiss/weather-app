const settings = require('../settings');
const request = require('request');

var geocodeAdress = address => {
  return new Promise((resolve, reject) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${
          settings.mapApiKey
        }`,
        json: true
      },
      (error, response) => {
        if (error) reject(error);
        resolve(response);
      }
    );
  });
};

module.exports = { geocodeAdress };
