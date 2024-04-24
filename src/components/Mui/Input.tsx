/**
 * @file Customized Input component with MUI's Input component.
 */

import { blue, grey } from "@/data/color";
import { Input as BaseInput } from "@mui/base/Input";
import { styled } from "@mui/system";
import * as React from "react";

const Input = React.forwardRef(function CustomInput(props: React.InputHTMLAttributes<HTMLInputElement>, ref: React.ForwardedRef<HTMLDivElement>) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default Input;

const InputElement = styled("input")(
  ({ theme }) => `
  width: 240px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
