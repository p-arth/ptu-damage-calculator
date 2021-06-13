import './styles.css';
import React from 'react';
import DamageCalculator from './components/DamageCalculator';

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Pokémon Tabletop United Damage Calculator</h1>
        <img
          className="pokeball"
          alt="pokeball"
          src="https://image.flaticon.com/icons/png/512/188/188918.png"
        />
        <div className="presentation-text">
          <h2>Increase your combat pacing while playing PTU</h2>
          <img
            className="pikachu"
            alt="pikachu-running"
            src="http://4.bp.blogspot.com/-0Fa05X2tat4/U_H9IY9gU4I/AAAAAAAAKpo/QZWJhZWuAps/s1600/Pikachu%2B15.gif"
          />
        </div>
      </div>
      <div className="App">
        <DamageCalculator />
      </div>
    </>
  );
}
