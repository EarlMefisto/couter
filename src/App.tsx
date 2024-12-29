import { useState } from "react";
import styled from "styled-components";

import "./App.css";
import { Panel } from "./components/Panel";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { FlexWrapper } from "./components/FlexWrapper";

function Counters() {
  const [counter, setCounter] = useState(0);
  const minNumber = 0;
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
    <StyledCounters>
      <Container>
        <FlexWrapper justify="center">
          <StyledFirstPanel>
            <Panel count={counter} maxCount={maxNumber} />
            <StyledButtonBox>
              <Button
                title="Inc"
                onClickHandler={onClickIncHandler}
                isDisabled={counter >= maxNumber}
              />
              <Button
                title="Reset"
                onClickHandler={onClickResetHandler}
                isDisabled={counter === 0}
              />
            </StyledButtonBox>
          </StyledFirstPanel>
        </FlexWrapper>
      </Container>
    </StyledCounters>
  );
}

export default Counters;

const StyledCounters = styled.div`
  background-color: rgba(11, 31, 103, 0.99);
`;

const StyledFirstPanel = styled.section`
  display: flex;
  flex-direction: column;

  border: 3px solid rgba(237, 84, 13, 0.99);
  border-radius: 7px;

  width: 300px;
  height: 200px;

  padding: 20px;
  margin: 10px 0;
`;

const StyledButtonBox = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  border: 3px solid rgba(237, 84, 13, 0.99);
  border-radius: 7px;
  background-color: rgba(11, 31, 103, 0.99);

  width: 100%;
  height: 40%;

  padding: 15px;
`;
