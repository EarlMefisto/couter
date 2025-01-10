import styled from "styled-components";
import "./App.css";

import { FirstPanel } from "./loyout/sections/FirstPanel";
import { SecondPanel } from "./loyout/sections/SecondPanel";
import { ThirdPanel } from "./loyout/sections/ThirdPanel";

function Counters() {
  return (
    <StyledCounters>
      <FirstPanel />
      <SecondPanel />
      <ThirdPanel/>
    </StyledCounters>
  );
}

export default Counters;

const StyledCounters = styled.div`
  background-color: rgba(11, 31, 103, 0.999);
`;
