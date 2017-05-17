var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=343cfc83d30ae3ad205f5745debe351e&units=metric';

//343cfc83d30ae3ad205f5745debe351e

module.exports = {
  getTemp:  function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      debugger;
      if(res.data.cod && res.data.message) {
        throw new Error('Unable to fetch weather')
      } else {
        return res.data.main.temp
      }
    }, function (error) {
      throw new Error(error.response.data.message);
    })
  }
}
