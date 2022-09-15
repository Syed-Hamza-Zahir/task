import React from 'react';
import './App.css';
import icon from './icon.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <img src={icon} className="App-icon" alt="icon" />
        </header>
        <div>
          <Route exact path="/" component={Fib} />
        </div>
      </div>
    </Router>
  );
}

export default App;
