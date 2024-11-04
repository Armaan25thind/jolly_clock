// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import ReactDOM from 'react-dom';

// function App(){
//   return <h1>Hello, React!</h1>;
// }

// ReactDOM.render(<App />, document.getElementById('root'));
// export default App;
// import React from 'react';
// import'./App.css';
// import Tic from './Tic';

// const App=()=>{
//   return (
//     <div>
//       <Tic />
//     </div>
//   );
// };



// export default App;






import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, updateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <div className="elementcontainer">
        <h1>Digital Clock</h1>
        <div className="timeparent">
          <div className="timecontainer">
            <span className="time">{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [display, setDisplay] = useState('0');
//   const [equation, setEquation] = useState('');
//   const [lastPressed, setLastPressed] = useState('');

//   const handleNumber = (number) => {
//     if (display === '0' || lastPressed === '=') {
//       setDisplay(number);
//       setEquation(number);
//     } else {
//       setDisplay(display + number);
//       setEquation(equation + number);
//     }
//     setLastPressed(number);
//   };

//   const handleOperator = (operator) => {
//     if (lastPressed !== '=' && !isNaN(lastPressed)) {
//       setDisplay(operator);
//       setEquation(equation + operator);
//     } else if (lastPressed === '=') {
//       setEquation(display + operator);
//     }
//     setLastPressed(operator);
//   };

//   const handleEquals = () => {
//     try {
//       // Using Function instead of eval for safer execution
//       const result = new Function('return ' + equation)();
//       setDisplay(String(result));
//       setEquation(String(result));
//       setLastPressed('=');
//     } catch (error) {
//       setDisplay('Error');
//       setEquation('');
//       setLastPressed('Error');
//     }
//   };

//   const handleClear = () => {
//     setDisplay('0');
//     setEquation('');
//     setLastPressed('');
//   };

//   const handleDecimal = () => {
//     if (!display.includes('.') && lastPressed !== '=') {
//       setDisplay(display + '.');
//       setEquation(equation + '.');
//       setLastPressed('.');
//     } else if (lastPressed === '=') {
//       setDisplay('0.');
//       setEquation('0.');
//       setLastPressed('.');
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">{display}</div>
//       <div className="buttons">
//         <button onClick={handleClear} className="button clear">C</button>
//         <button onClick={() => handleOperator('/')} className="button operator">÷</button>
//         <button onClick={() => handleOperator('*')} className="button operator">×</button>
//         <button onClick={() => handleOperator('-')} className="button operator">−</button>
        
//         <button onClick={() => handleNumber('7')} className="button">7</button>
//         <button onClick={() => handleNumber('8')} className="button">8</button>
//         <button onClick={() => handleNumber('9')} className="button">9</button>
//         <button onClick={() => handleOperator('+')} className="button operator">+</button>
        
//         <button onClick={() => handleNumber('4')} className="button">4</button>
//         <button onClick={() => handleNumber('5')} className="button">5</button>
//         <button onClick={() => handleNumber('6')} className="button">6</button>
//         <button onClick={handleEquals} className="button equals">=</button>
        
//         <button onClick={() => handleNumber('1')} className="button">1</button>
//         <button onClick={() => handleNumber('2')} className="button">2</button>
//         <button onClick={() => handleNumber('3')} className="button">3</button>
//         <button onClick={() => handleNumber('0')} className="button zero">0</button>
        
//         <button onClick={handleDecimal} className="button">.</button>
//       </div>
//     </div>
//   );
// }

// export default App;