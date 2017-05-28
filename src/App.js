import React, { Component } from 'react';
import TravellerMap from './components/map/TravellerMap';
import './App.css';


// App.js entry
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Where is Loren?</h2>
        </div>
        <h3>
          Here I am! (maybe?)
        </h3>
        <p className="App-intro">
          Click the red dots for more info
        </p>
        <div style={{width: '100%', height: '595px'}}>
          <TravellerMap />
        </div>
        <div className="App-footer">
          <p> Contact: <a href="mailto:lorenbrindze@gmail.com?Subject=Where%20are%20you%3F">lorenbrindze@gmail.com</a></p>
        </div>
      </div>
    );
  }
}

export default App;
