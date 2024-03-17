import './App.css';
import { CurrentWeather } from './components/current-weather/currentWeather';
import { Search } from './components/search/search';

function App() {

  const handleOnSearchCHange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchCHange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
