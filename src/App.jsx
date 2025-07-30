import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './confirmButton';
import ConfirmButton from './confirmButton';

function App() {
  const [count, setCount] = useState(0)

  const suma = (numberAdd) => {
    setCount(count + numberAdd);
  }

  Array.prototype.improvisedMap = function (callback) {
    let newArray = [];

    this.forEach((element, index) => {
      let result = callback(element)
      newArray.push(result);
    })

    return newArray;
  }

  const numbers = [5, 10, 15, 20, 25, 30, 35, 40];

  const duplicateNumbers = numbers.improvisedMap((valor) => {
    return valor * 2;
  });

  console.log(duplicateNumbers, 'improvisedMap');

  Array.prototype.improvisedFilter = function (callback) {
    let newArray = [];
    this.forEach((element, index) => {
      if (callback(element)) {
        newArray.push(element);
      }
    })

    return newArray;
  }

  const filterNumber = numbers.improvisedFilter((valor) => {
    return valor > 20;
  })

  console.log(filterNumber, 'improvisedFilter');

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => suma(1)}>
          count is {count}
        </button>
        <ConfirmButton text="De a 10" onClick={() => suma(10)} />
        <ConfirmButton text="De a 100" onClick={() => suma(100)} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
