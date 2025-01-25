import styled from "styled-components";
import { useState } from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Panel } from "../../components/Panel";
import { Button } from "../../components/Button";

export const SecondPanel = () => {
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
    <Container>
      <FlexWrapper justify="space-around">
        <StyledSecondPanel>
          <Panel count={counter} maxCount={maxNumber} />
          <StyledButtonBox>
            <Button
              title="Inc"
              onClickHandler={onClickIncHandler}
              isDisabled={counter >= maxNumber}
            />
            <Button title="Reset" onClickHandler={onClickResetHandler} />
          </StyledButtonBox>
        </StyledSecondPanel>
      </FlexWrapper>
    </Container>
  );
};

const StyledSecondPanel = styled.section`
  display: flex;
  flex-direction: column;

  border: 3px solid rgba(237, 200, 13, 0.999);
  border-radius: 7px;

  width: 300px;
  height: 200px;

  padding: 20px;
  margin: 40px 0;
`;

const StyledButtonBox = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  border: 3px solid rgba(237, 200, 13, 0.999);
  border-radius: 7px;
  background-color: rgba(11, 31, 103, 0.999);

  width: 100%;
  height: 40%;

  padding: 15px;
`;

const StyledLabel = styled.label`
  color: white;
`;
