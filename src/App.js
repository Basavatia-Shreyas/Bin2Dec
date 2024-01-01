import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

function App() {

  const [binary, setBinary] = useState("");
  const [converted, setConverted] = useState("");

  const check = binary.length;

  const convert = useCallback(() => {
    //Check the input is 8 or less digits
    var length = true;
    if (binary.length !== 8) {
      setConverted("Please enter 8 digits");
      length = false;
    }

    //Notify user if anything by 0 and 1's were entered
    var correctDigits = true;
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] !== "0" & binary[i] !== "1") {
        correctDigits = false;
      }
    }
    if (!correctDigits) {
      setConverted("Please enter 1's and 0's");
    }

    //Convert binary to decminal
    var runningTotal = 0;
    for (let i = 0; i < binary.length; i++) {
      var temp = parseInt(binary[i]);
      temp = temp * Math.pow(2, binary.length-i-1);
      runningTotal += temp
    }
    if (length & correctDigits) {
      setConverted(runningTotal);
    }

  }, [binary])

  return (
    <div className="App">
      <header className="App-header">
        Binary to Decimal converter
        <div>
          <label>
            Enter binary number:{' '}
            <input
              onChange={(e) => setBinary(e.target.value)}
            >
            </input>
          </label>
          {' '}
          <button onClick={convert}>
            Convert
          </button>
          <p>{converted}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
