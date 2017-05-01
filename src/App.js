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
        <p className="App-intro">
          He is Here! (well, his boat at least... maybe?)
        </p>
        <div style={{width: '100%', height: '595px'}}>
          <TravellerMap />
        </div>
        <div className="App-footer">
          <h4> Contact: <a href="mailto:lorenbrindze@gmail.com?Subject=Where%20are%20you%3F">lorenbrindze@gmail.com</a></h4>
        </div>
      </div>
    );
  }
}

export default App;
