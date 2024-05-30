import React from "react";

const InputContainer = ({ handleInput,handleStart }) => {
  return (
    <>
      <div className="input-container">
        <div className="input-box">
          <input
            onChange={handleInput}
            type="number"
            id="hours"
            placeholder="HH"
          />
          <span>:</span>
          <input
            onChange={handleInput}
            type="number"
            id="minutes"
            placeholder="MM"
          />
          <span>:</span>
          <input
            onChange={handleInput}
            type="number"
            id="seconds"
            placeholder="SS"
          />
        </div>
        <button onClick={handleStart} className="timer-button">
          Start
        </button>
      </div>
    </>
  );
};

export default InputContainer;
