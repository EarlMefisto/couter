import styled from "styled-components";

export type PanelPropsType = {
  count: number;
  maxCount: number;
};

export const Panel = (props: PanelPropsType) => {
  return (
    <StyledPanel>
      <span className={props.count >= props.maxCount ? "stop" : ""}>
        {props.count}
      </span>
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  border: none;
  border-radius: 5px;

  width: 100%;
  height: 60%;

  color: rgba(255, 255, 255, 0.99);
  background-color: rgba(237, 84, 13, 0.99);

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
`;
