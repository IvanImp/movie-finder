import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="search-bar">
          <form>
            <label>
              <input className="search-input" placeholder="Search Movie..." type="text" name="movie" />
            </label>
          </form>

          <button className="search-button">
            Search
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
