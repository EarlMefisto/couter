import { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { FlexWrapper } from "./FlexWrapper";

type InputPropsType = {
  title: string;
  value: number;
  onChange: (value: number) => void;
};

export const Input = ({ title, value, onChange }: InputPropsType) => {
  const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(+event.currentTarget.value);
  };

  return (
    <FlexWrapper justify="space-around">
      <label>{title}</label>
      <TextField
        type="number"
        value={value}
        onChange={onChangeValueHandler}
        size="small"
      />
    </FlexWrapper>
  );
};