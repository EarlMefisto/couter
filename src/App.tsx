import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Counter } from "./loyout/counters/Counter";


function App() {
  const [counter, setCounter] = useState(0);
  const maxNumber = 5;

  const onClickIncHandler = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  const onClickResetHandler = () => {
    setCounter(0);
  };

  return (
    <div>
      <Counter count={counter} maxCount={maxNumber} />
      <Button title="Inc" onClickHandler={onClickIncHandler} disabled={counter >= maxNumber} />
      <Button title="Reset" onClickHandler={onClickResetHandler} disabled={counter === 0}/>
    </div>
  );
}

export default App;
