import { useState } from "react";
import styled from "styled-components";

export type ButtonPropsType = {
  title: string;
  onClickHandler?: () => void;
  disabled?: boolean;
};

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton>
      <button onClick={props.onClickHandler} disabled={props.disabled}>
        {props.title}
      </button>
    </StyledButton>
  );
};


const StyledButton = styled.button`
    
`