const request = require("request");
const chalk = require("chalk");

const forecast = (latitude, longitude, lang, units, callback) => {
  const url =
    "https://api.darksky.net/forecast/1e677492202c7825b85b8556c64f61ca/" +
    latitude +
    "," +
    longitude +
    "?units=" +
    units +
    "&lang=" +
    lang;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect services!", undefined);
    } else if (body.error) {
      callback(body, undefined);
    } else {
      console.log(
        chalk.green.bold("Successfuly connected to forecast services.")
      );

      const data = {
        forecast: body
      };
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
