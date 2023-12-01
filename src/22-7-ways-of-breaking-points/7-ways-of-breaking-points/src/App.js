import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('liYang');

  useEffect(() => {
    // setTimeout(() => {
    //   setState('yang');
    // }, 1000);
  }, []);

  useEffect(() => {
    console.log(123);
  }, []);

  return (
    <div className="App">
      <span
        onClick={(e) => {
          console.log(e);
        }}
      >
        {state}
      </span>
    </div>
  );
}

export default App;
