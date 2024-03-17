import './App.css';
import { Search } from './components/search/search';

function App() {

  const handleOnSearchCHange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchCHange}/>
    </div>
  );
}

export default App;
