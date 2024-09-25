import React from 'react';
import Timer from './Timer';
import Stopwatch from './Stopwatch';

const App: React.FC = () => {
  return (
    <div>
      <h1>Timer and Stopwatch</h1>
      <Timer initialTime={60} />
      <Stopwatch /> 
    </div>
  );
};

export default App;