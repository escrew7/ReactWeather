var React = require('react')

var WeatherMessage = (props) => {
  var {temp, location} = props;

  return(
    <div>
      <p>It is {temp} in {location}</p>
    </div>
  )
}

module.exports = WeatherMessage;
