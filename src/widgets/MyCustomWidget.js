import React, { useEffect, useState } from 'react';

export default function MyCustomWidget() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="widget" style={{ minWidth: '300px' }}>
      <div className="widget-header">
        <h3 style={{ textAlign: 'left' }}>Stopwatch</h3>
      </div>
      <div className="widget-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="timer" style={{ fontSize: '48px', fontWeight: 'bold' }}>
          {time}
        </div>
        <div className="controls" style={{ marginTop: '20px' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
            onClick={handleStartStop}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
            }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
