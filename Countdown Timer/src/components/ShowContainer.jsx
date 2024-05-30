import React from "react";

const ShowContainer = ({
  hours,
  minutes,
  seconds,
  isPaused,
  handlePause,
  handleReset,
  handleResume,
}) => {
  return (
    <>
      <div className="show-container">
        <div className="timer-box">
          <div className="time">{hours < 10 ? `0${hours}` : hours}</div>
          <span>:</span>
          <div className="time">{minutes < 10 ? `0${minutes}` : minutes}</div>
          <span>:</span>
          <div className="time">{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>

        <div className="action-box">
          {!isPaused ? (
            <button onClick={handlePause} className="timer-button">
              Pause
            </button>
          ) : (
            <button onClick={handleResume} className="timer-button">
              Resume
            </button>
          )}
          <button className="timer-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowContainer;
