import React, { Component } from 'react';
// import './App.css';
import './App.scss';
import RouterURL from '../RouterURL/RouterURL';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="home-main">
          <RouterURL />
        </div>
      </Router>
    );
  }
}

export default App;
