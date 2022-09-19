import logo from './logo.svg';
// import Timer from './components/timer';
import Timer from './components/Timer.class'
import Welcome from './components/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Timer instance="base" />
        <Welcome name="A" />
        <Welcome name="B" />
        <Welcome name="C" />
      </header>
    </div>
  );
}

export default App;
