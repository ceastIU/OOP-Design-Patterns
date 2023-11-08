import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const newIntervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    setIntervalId(newIntervalId);
    setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  const handleStartPause = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div >
      <h2>Countdown Timer:</h2>
      <p class="timer">{timer} seconds</p>
      <button  onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;