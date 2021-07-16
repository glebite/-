import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
      </a>
          <p>Something</p>
          {
              console.log(fetch('http://192.168.1.96:5000/random_number').response)
          }
      </header>
    </div>
  );
}

export default App;
