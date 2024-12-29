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

  width: 40%;
  height: 100%;

  color: rgba(255, 255, 255, 0.98);
  background-color: rgba(237, 84, 13, 0.971);

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
`;
