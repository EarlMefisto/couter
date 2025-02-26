import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Panel } from "../../../components/Panel";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const SecondPanel = () => {
  const [counter, setCounter] = useState(0);
  const [settingsPanel, setSettingsPanel] = useState(false);
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);

  const onClickIncHandler = () => {
    if (counter < maxValue) {
      setCounter(counter + 1);
    }
  };

  const onClickResetHandler = () => {
    setCounter(0);
  };

  const onChangeMaxValueHandler = () => {
    setMaxValue(maxValue + 1);
  };

  const onChangeStartValueHandler = () => {
    setStartValue(startValue + 1);
  };

  const onClickSetHandler = () => {
    setSettingsPanel(false);
    setCounter(startValue);
  };

  return (
    <Container>
      <FlexWrapper justify="space-around">
        <StyledSecondPanel>
          {settingsPanel ? (
            <>
              <StyledInputBox>
                <Input
                  title="Max value:"
                  value={maxValue}
                  onChange={onChangeMaxValueHandler}
                />
                <Input
                  title="Start value:"
                  value={startValue}
                  onChange={onChangeStartValueHandler}
                />
              </StyledInputBox>
              <StyledButtonBox>
                <Button
                  title="Set"
                  onClickHandler={onClickSetHandler}
                  isDisabled={startValue <= 0}
                />
              </StyledButtonBox>
            </>
          ) : (
            <>
              <Panel count={counter} />
              <StyledButtonBox>
                <Button
                  title="Inc"
                  onClickHandler={onClickIncHandler}
                  isDisabled={counter >= maxValue}
                />
                <Button title="Reset" onClickHandler={onClickResetHandler} />
                <Button
                  title="Set"
                  onClickHandler={() => setSettingsPanel(true)}
                />
              </StyledButtonBox>
            </>
          )}
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

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;

  border: 3px solid rgba(237, 200, 13, 0.999);
  border-radius: 7px;

  padding: 10px;
  margin-bottom: 20px;

  color: rgba(255, 255, 255, 0.999);
  background-color: rgba(237, 200, 13, 0.999);
  font-weight: 700;
`;
