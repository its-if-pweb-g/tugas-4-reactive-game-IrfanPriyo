import React, { useState, useEffect } from 'react';

interface StopwatchProps {
  initialTime?: number; // in seconds
}

const Stopwatch: React.FC<StopwatchProps> = ({ initialTime }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [isRunning, time]);

  return (
    <div>
      <p>Time: {time} seconds</p>
      {isRunning ? (
        <p>Stopwatch is running...</p>
      ) : (
        <p>Stopwatch is stopped.</p>
      )}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

export {};