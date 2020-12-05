import "./App.css";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import LocationSearch from "./components/LocationSearch/LocationSearch";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [locationWeather, setLocationWeather] = useState(null);

  const onChangeHandler = (evt) => {
    let locationSearchValue = evt.target.value;
    if (locationSearchValue === "") {
      setShowDropdown(false);
      setSearchResults([]);
      return;
    }

    let locationSearchQuery = `https://www.metaweather.com/api/location/search/?query=${locationSearchValue}`;
    fetch(locationSearchQuery)
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          setShowDropdown(true);
          setSearchResults(result);
        }
      });
  };

  const onClickHandler = (id) => {
    let locationWeatherQuery = `https://www.metaweather.com/api/location/${id}/`;
    fetch(locationWeatherQuery)
      .then((res) => res.json())
      .then((result) => {
        if (result.consolidated_weather.length > 0) {
          setLocationWeather({
            ...result.consolidated_weather[0],
            title: result.title,
          });
        }
      });
    setShowDropdown(false);
  };
  return (
    <div className="App">
      <div className="AppContainer">
        <div className="PageTitle">Weather App</div>
        <LocationSearch
          showDropdown={showDropdown}
          searchResults={searchResults}
          onClickHandler={onClickHandler}
          onChangeHandler={onChangeHandler}
        />
        {locationWeather && <WeatherCard locationWeather={locationWeather} />}
      </div>
    </div>
  );
}

export default App;
