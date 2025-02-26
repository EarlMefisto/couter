import styled from "styled-components";

export type PanelPropsType = {
  count: number;
  error?: string;
};

export const Panel = ({ count, error }: PanelPropsType) => {
  return (
    <StyledPanel>
      <span>{count}</span>
      {error && <StyledError>{error}</StyledError>}
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

  color: rgba(255, 255, 255, 0.999);
  background-color: rgba(237, 200, 13, 0.999);

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
`;

const StyledError = styled.div`
  color: red;
  font-size: 20px;
  margin-top: 10px;
`;
