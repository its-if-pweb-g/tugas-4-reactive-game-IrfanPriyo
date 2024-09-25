import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number; // in seconds
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(initialTime);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value, 10);
    setTime(newTime);
  };

  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setIsRunning(false);
          setIsPaused(false);
          setTime(0);
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [isRunning, time]);

  const progress = (time / initialTime) * 100;

  return (
    <div>
      <input
        type="number"
        value={time}
        onChange={handleTimeChange}
        placeholder="Enter time in seconds"
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
      <p>Time: {time} seconds</p>
      {isRunning ? (
        <p>Timer is running...</p>
      ) : isPaused ? (
        <p>Timer is paused...</p>
      ) : (
        <p>Timer is stopped.</p>
      )}
      <div className="timer-container">
        <div className="timer-progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Timer;

export{};