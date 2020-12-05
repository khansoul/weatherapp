import "./WeatherCard.css";
const WeatherCard = (props) => {
  const c2f = (c) => c * (9 / 5) + 32;
  const locationWeather = props.locationWeather;
  return (
    <div className="WeatherCardContainer">
      <div className="WeatherInfo">
        <div className="Title">{locationWeather.title}</div>
        <div className="Temperature">
          {c2f(locationWeather.the_temp).toFixed(1)}°F
        </div>
        <div className="Description">{locationWeather.weather_state_name}</div>
      </div>
      <div className="WeatherIcon">
        <img
          src={`https://www.metaweather.com/static/img/weather/png/64/${locationWeather.weather_state_abbr}.png`}
          alt="weather"
        ></img>
      </div>
    </div>
  );
};

export default WeatherCard;
