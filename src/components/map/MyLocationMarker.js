import React from 'react';
import sailingBoat from './sailing-boat.svg';

export default ({ text }) => (
  <div style={{
    position: 'relative',
    height: 30, width: 40, top: -15, left: -20,
  }}>
    <img src={sailingBoat} alt="sailboat logo" />
    {text}
  </div>
);

