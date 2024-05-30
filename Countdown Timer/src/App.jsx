import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import InputContainer from "./components/InputContainer";
import ShowContainer from "./components/ShowContainer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, settimerId] = useState(0);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid Input");
      return;
    } else {
      setIsStart(true);
    }
  };
  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };
  const handleResume = () => {
    setIsPaused(false);
    runtimer(seconds, minutes, hours, timerId);
  };

  const handleReset = () => {
    setIsStart(false);
    restTimer();
  };
  const restTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;

    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };
  const runtimer = (sec, min, hrs, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && hrs === 0) {
      // restTimer();
      handleReset();
      alert("Timer Finished");
      return;
    }
  };
  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runtimer(seconds, minutes, hours, timerId);
      }, 1000);
      settimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);

  console.log(hours, minutes, seconds);
  return (
    <>
      <div className="overlay"></div>
      <main>
        <h1>Countdown Timer</h1>
        {!isStart ? (
          <InputContainer handleStart={handleStart} handleInput={handleInput} />
        ) : (
          <ShowContainer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isPaused={isPaused}
            handlePause={handlePause}
            handleReset={handleReset}
            handleResume={handleResume}
          />
        )}
      </main>
    </>
  );
}

export default App;
