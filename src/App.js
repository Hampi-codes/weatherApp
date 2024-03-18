import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api/api';
import './App.css';
import { CurrentWeather } from './components/current-weather/currentWeather';
import { Search } from './components/search/search';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchCHange = (searchData) => {
    const [lattitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lattitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lattitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const waetherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...waetherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      })

  }

  console.log("currentWeatherrrrrrrrr", currentWeather);
  console.log("forecastttttttttttt", forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchCHange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
