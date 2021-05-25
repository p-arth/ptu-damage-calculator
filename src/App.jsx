import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [baseValue, setBaseValue] = useState(1);
  const [suggestion, setSuggestion] = useState(5);
  const [roll, setRoll] = useState("1d6+1");
  const [damageValue, setDamageValue] = useState(5);
  const [statsValue, setStatsValue] = useState("");
  const [enemyStatsValue, setEnemyStatsValue] = useState("");
  const [STABValue, setSTABValue] = useState(false);
  const [critValue, setCritValue] = useState(false);
  const [lastChanceValue, setLastChanceValue] = useState(false);
  const [critLastChanceValue, setCritLastChanceValue] = useState(false);
  const [semiTotal, setSemiTotal] = useState("");
  const [finalTotal, setFinalTotal] = useState("");
  const [effectiveValue, setEffectiveValue] = useState(false);
  const [doubleEffectiveValue, setDoubleEffectiveValue] = useState(false);
  const [notEffectiveValue, setNotEffectiveValue] = useState(false);
  const [doubleNotEffectiveValue, setDoubleNotEffectiveValue] = useState(false);

  const damageBaseArray = Array.from({ length: 28 }, (_, i) => i + 1);

  const handleBaseChange = (event) => {
    let rightValue = event.target.value;
    setBaseValue(parseInt(rightValue, 10));
    getSuggestion(parseInt(rightValue, 10));
    handleDamageChange({ target: { value: "" } });
    setSTABValue(false);
    setCritValue(false);
    setLastChanceValue(false);
  };

  const handleDamageChange = (event) => {
    switch (event.target.value) {
      case 0:
        setDamageValue("0");
        return null;
      case "0":
        setDamageValue("0");
        return null;
      case null:
        setDamageValue(suggestion);
        return null;
      default:
        setDamageValue(parseInt(event.target.value, 10));
        return null;
    }
  };

  const handleSTABChange = (event) => {
    setSTABValue(!STABValue);
    !STABValue ? getSuggestion(baseValue + 2) : getSuggestion(baseValue);
  };

  const handleCritChange = (event) => {
    setCritValue(!critValue);
  };

  const handleLastChanceChange = (event) => {
    setLastChanceValue(!lastChanceValue);
    setCritLastChanceValue(false);
  };

  const handleCritLastChanceChange = (event) => {
    setCritLastChanceValue(!critLastChanceValue);
    setLastChanceValue(false);
  };

  const handleStatsChange = (event) => {
    if (event.target.value === null) {
      setStatsValue(0);
    } else {
      setStatsValue(parseInt(event.target.value, 10));
    }
  };

  const handleEnemyStatsChange = (event) => {
    if (event.target.value === null) {
      setEnemyStatsValue(0);
    } else {
      setEnemyStatsValue(parseInt(event.target.value, 10));
    }
  };

  const handleEffectiveChange = (event) => {
    setEffectiveValue(!effectiveValue);
    setDoubleEffectiveValue(false);
    setNotEffectiveValue(false);
    setDoubleNotEffectiveValue(false);
  };

  const handleDoubleEffectiveChange = (event) => {
    setDoubleEffectiveValue(!doubleEffectiveValue);
    setEffectiveValue(false);
    setNotEffectiveValue(false);
    setDoubleNotEffectiveValue(false);
  };

  const handleNotEffectiveChange = (event) => {
    setNotEffectiveValue(!notEffectiveValue);
    setDoubleNotEffectiveValue(false);
    setDoubleEffectiveValue(false);
    setEffectiveValue(false);
  };

  const handleDoubleNotEffectiveChange = (event) => {
    setDoubleNotEffectiveValue(!doubleNotEffectiveValue);
    setNotEffectiveValue(false);
    setDoubleEffectiveValue(false);
    setEffectiveValue(false);
  };

  const getSuggestion = (suggestionValue) => {
    switch (suggestionValue) {
      case 1:
        setSuggestion(5);
        setRoll("1d6+1");
        return null;
      case 2:
        setSuggestion(7);
        setRoll("1d6+3");
        return null;
      case 3:
        setSuggestion(9);
        setRoll("1d6+5");
        return null;
      case 4:
        setSuggestion(11);
        setRoll("1d8+6");
        return null;
      case 5:
        setSuggestion(13);
        setRoll("1d8+8");
        return null;
      case 6:
        setSuggestion(15);
        setRoll("2d6+8");
        return null;
      case 7:
        setSuggestion(17);
        setRoll("2d6+10");
        return null;
      case 8:
        setSuggestion(19);
        setRoll("2d8+10");
        return null;
      case 9:
        setSuggestion(21);
        setRoll("2d10+10");
        return null;
      case 10:
        setSuggestion(24);
        setRoll("3d8+10");
        return null;
      case 11:
        setSuggestion(27);
        setRoll("3d10+10");
        return null;
      case 12:
        setSuggestion(30);
        setRoll("3d12+10");
        return null;
      case 13:
        setSuggestion(35);
        setRoll("4d10+10");
        return null;
      case 14:
        setSuggestion(40);
        setRoll("4d10+15");
        return null;
      case 15:
        setSuggestion(45);
        setRoll("4d10+20");
        return null;
      case 16:
        setSuggestion(50);
        setRoll("5d10+20");
        return null;
      case 17:
        setSuggestion(60);
        setRoll("5d12+25");
        return null;
      case 18:
        setSuggestion(65);
        setRoll("6d12+25");
        return null;
      case 19:
        setSuggestion(70);
        setRoll("6d12+30");
        return null;
      case 20:
        setSuggestion(75);
        setRoll("6d12+35");
        return null;
      case 21:
        setSuggestion(80);
        setRoll("6d12+40");
        return null;
      case 22:
        setSuggestion(85);
        setRoll("6d12+45");
        return null;
      case 23:
        setSuggestion(90);
        setRoll("6d12+50");
        return null;
      case 24:
        setSuggestion(95);
        setRoll("6d12+55");
        return null;
      case 25:
        setSuggestion(100);
        setRoll("6d12+60");
        return null;
      case 26:
        setSuggestion(110);
        setRoll("7d12+65");
        return null;
      case 27:
        setSuggestion(120);
        setRoll("8d12+70");
        return null;
      case 28:
        setSuggestion(130);
        setRoll("8d12+80");
        return null;
      default:
        setSuggestion(5);
        setRoll("1d6+1");
        return null;
    }
  };

  const damageCalculator = () => {
    let total = 0;
    let lastTotal = 0;
    let damage = parseInt(damageValue ? damageValue : suggestion, 10);
    let stats = parseInt(statsValue ? statsValue : 0, 10);
    let enemyStats = parseInt(enemyStatsValue ? enemyStatsValue : 0, 10);

    if (critValue === true && lastChanceValue === true) {
      total = damage * 2 + 5 + stats;
    } else if (critValue === true && critLastChanceValue === true) {
      total = damage * 2 + 10 + stats;
    } else if (critValue === true) {
      total = damage * 2 + stats;
    } else if (lastChanceValue === true) {
      total = damage + 5 + stats;
    } else if (critLastChanceValue === true) {
      total = damage + 10 + stats;
    } else {
      total = damage + stats;
    }

    setSemiTotal(total);

    if (total - enemyStats <= 0) {
      lastTotal = 1;
    } else {
      lastTotal = total - enemyStats;
    }

    if (effectiveValue === true) {
      setFinalTotal(Math.floor(lastTotal * 1.5));
    } else if (doubleEffectiveValue === true) {
      setFinalTotal(Math.floor(lastTotal * 2));
    } else if (notEffectiveValue === true) {
      setFinalTotal(Math.floor(lastTotal * 0.5));
    } else if (doubleNotEffectiveValue === true) {
      setFinalTotal(Math.floor(lastTotal * 0.25));
    } else {
      setFinalTotal(Math.floor(lastTotal));
    }
  };

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
        <form className="form-app">
          <label className="form-app_label">Base Damage</label>
          <select onChange={handleBaseChange}>
            {damageBaseArray.map((baseValue) => {
              return (
                <option value={baseValue} key={baseValue}>
                  {baseValue}
                </option>
              );
            })}
          </select>

          <label className="form-app_label-click">
            STAB
            <input
              name="STAB"
              type="checkbox"
              checked={STABValue}
              onChange={handleSTABChange}
            />
          </label>

          <label className="form-app_label-click">
            Last Chance (Overgrow, Torrent, etc)
            <input
              name="Last Chance"
              type="checkbox"
              checked={lastChanceValue}
              onChange={handleLastChanceChange}
            />
          </label>

          <label className="form-app_label-click">
            -1/3 HP Last Chance (Overgrow, Torrent, etc)
            <input
              name="Crit Last Chance"
              type="checkbox"
              checked={critLastChanceValue}
              onChange={handleCritLastChanceChange}
            />
          </label>

          <label className="form-app_label-click">
            Critical Hit
            <input
              name="Crit"
              type="checkbox"
              checked={critValue}
              onChange={handleCritChange}
            />
          </label>

          <label className="form-app_label">Set/Roll Damage</label>
          <div className="form-app_set-damage">
            <div className="form-app_set-damage_title">Set Value:</div>
            <div className="form-app_set-damage_value">{suggestion}</div>
          </div>
          <div className="form-app_set-damage">
            <div className="form-app_set-damage_title">Roll:</div>
            <div className="form-app_set-roll">{roll}</div>
          </div>
          <input
            type="text"
            value={damageValue ? damageValue : suggestion}
            onChange={handleDamageChange}
            className="form-app_text-input"
          />

          <label className="form-app_label">Your Stats</label>
          <div className="form-app_set-damage">
            <div className="form-app_set-damage_title">Attack / Sp. Attack</div>
          </div>
          <input
            type="text"
            value={statsValue ? statsValue : 0}
            onChange={handleStatsChange}
            className="form-app_text-input"
          />

          <label className="form-app_label">Enemy Stats</label>
          <div className="form-app_set-damage">
            <div className="form-app_set-damage_title">
              Defense / Sp. Defense
            </div>
          </div>
          <input
            type="text"
            value={enemyStatsValue ? enemyStatsValue : 0}
            onChange={handleEnemyStatsChange}
            className="form-app_text-input"
          />

          <label className="effective-box">
            <label className="form-app_label-click">
              Very Effective
              <input
                name="Very Effective"
                type="checkbox"
                checked={effectiveValue}
                onChange={handleEffectiveChange}
              />
            </label>

            <label className="form-app_label-click">
              x2 Very Effective
              <input
                name="Double Very Effective"
                type="checkbox"
                checked={doubleEffectiveValue}
                onChange={handleDoubleEffectiveChange}
              />
            </label>
          </label>

          <label className="effective-box">
            <label className="form-app_label-click">
              Not Effective
              <input
                name="Very Effective"
                type="checkbox"
                checked={notEffectiveValue}
                onChange={handleNotEffectiveChange}
              />
            </label>

            <label className="form-app_label-click">
              x2 Not Effective
              <input
                name="Double Very Effective"
                type="checkbox"
                checked={doubleNotEffectiveValue}
                onChange={handleDoubleNotEffectiveChange}
              />
            </label>
          </label>

          <input
            type="button"
            className="form-app_submit"
            value="Calculate"
            onClick={() => damageCalculator()}
          />

          <label className="form-app_label-final">Raw Damage</label>
          <div className="form-app_set-final_value">{semiTotal}</div>
          <label className="form-app_label-final">Done Damage</label>
          <div className="form-app_set-final_value">{finalTotal}</div>
          <div className="modifiers"></div>
        </form>
      </div>
    </>
  );
}
