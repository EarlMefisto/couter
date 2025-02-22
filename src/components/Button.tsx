import styled from "styled-components";

export type ButtonPropsType = {
  title: string;
  onClickHandler?: () => void;
  isDisabled?: boolean; 
};

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton onClick={props.onClickHandler} disabled={props.isDisabled}>
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;

  width: 80px;
  height: 40px;

  cursor: pointer;

  color: rgba(255, 255, 255, 0.999);
  background-color: rgba(237, 200, 13, 0.999);

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
`;
