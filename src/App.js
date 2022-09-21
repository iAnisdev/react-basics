import React from 'react';
import './App.css';
import { ErrorBoundaryMain } from './components/ErrorBoundary/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundaryMain />
      </div>
    );
  }
}

export default App;
