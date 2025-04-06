// button.component.tsx

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  label: string;
  backgroundColor?: string;
}

const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);

export default Button;
export type { ButtonProps };
