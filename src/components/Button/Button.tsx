// button.tsx
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

// Providing the backgroundColor as a prop to the component
// allows for more flexibility in styling the button without needing to modify the component itself.
// This will override the "primary, secondary" settings with out using the "style" prop.
// However the "style" prop can still be used to override the backgroundColor (which it will do) if needed.
// This is useful for cases where you want to set a specific color for the button that is not part of the theme.

interface ButtonProps extends MuiButtonProps {
  label: string;
  backgroundColor?: string; // Optional backgroundColor prop
}

const Button = ({
  label,
  backgroundColor,
  onClick = () => alert(`Button ${label} clicked`),
  ...rest
}: ButtonProps) => (
  <MuiButton
    {...rest}
    onClick={onClick}
    style={{
      backgroundColor: backgroundColor || rest.style?.backgroundColor, // Apply backgroundColor if provided
      ...rest.style, // Merge with other styles
    }}
  >
    {label}
  </MuiButton>
);

export default Button;
export type { ButtonProps };
