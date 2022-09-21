import React from 'react';
import './App.css';
import LoadMain from './components/Load/Main';

import { ThemeContext } from './Contexts/ThemeContext';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value="dark">
          <LoadMain />
        </ThemeContext.Provider>
      </div>
    );
  }
}

App.contextType = ThemeContext

export default App;
