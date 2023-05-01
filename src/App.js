import logo from './images/logo.png';
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartClick = () => {
    setNumClicks(0);
  };


  return (
    <div className="App">
      <div className='container'>
        <img className='logo' src={logo} alt='Logo RiandiCode' />
        <div class="counter-box">
          <Counter numClicks={numClicks} />
          <div class="buttons">
            <Button
              text='Click'
              isButtonClick={true}
              handleClick={handleClick}
            />
            <Button
              text='Reiniciar'
              isButtonClick={false}
              handleClick={restartClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
