var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the About Page</p>
      <p>This weather app has been made with the Udemy Course <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview"> The
      Complete React Developers Course</a> by Andrew Mead.</p>
      <p>This app is generated using the <a href="https://facebook.github.io/react/">React Engine</a> and
      utilises the <a href="https://openweathermap.org/">OpenWeatherMap</a> API.
      </p>
      <p>If you wish to delve deeper into the code please visit my <a href="https://github.com/escrew7/ReactWeather">github
      repository.</a></p>
      <p>Thanks for your time!</p>
      <p>Luke Rees</p>
    </div>
  )
}

module.exports = About;
