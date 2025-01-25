import styled from "styled-components";
import "./App.css";
import { FirstPanel } from "./loyout/sections/FirstPanel";
import { SecondPanel } from "./loyout/sections/SecondPanel";
import { ThirdPanel } from "./loyout/sections/ThirdPanel";
import { useEffect, useState } from "react";

function Counters() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let valueAsString = localStorage.getItem("counterValue");
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setValue(newValue);
      
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem("counterValue", JSON.stringify(value));
  }, [value]);

  const onClickIncHandler = () => {
    setValue(value + 1);
  };

  // const setToLocalStorageHandler = () => {
  //     localStorage.setItem("counterValue", JSON.stringify(value));
  //     localStorage.setItem("counterValue + 1", JSON.stringify(value + 1));
  //   };

  // const getFromLocalStorageHandler = () => {};

  // const clearLocalStorageHandler = () => {
  //   localStorage.clear();
  //   setValue(0);
  // };

  // const removeItemFromLocalStorageHandler = () => {
  //   localStorage.removeItem("counterValue + 1");
  // };

  return (
    <StyledCounters>
      <FirstPanel />
      <SecondPanel />
      <ThirdPanel />
      <h1>{value}</h1>
      <button onClick={onClickIncHandler}>Inc</button>
      {/* <button onClick={setToLocalStorageHandler}>Set</button> */}
      {/* <button onClick={getFromLocalStorageHandler}>Get</button>
      <button onClick={clearLocalStorageHandler}>Clear</button>
      <button onClick={removeItemFromLocalStorageHandler}>Remove</button> */}
    </StyledCounters>
  );
}

export default Counters;

const StyledCounters = styled.div``;
