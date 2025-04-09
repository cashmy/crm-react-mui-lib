import React from "react";

// Removed custom Omit type definition as it conflicts with TypeScript's built-in Omit type.
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Tooltip,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";

type TooltipPlacement =
  | "top-start"
  | "top"
  | "top-end"
  | "left-start"
  | "left"
  | "left-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "right-start"
  | "right"
  | "right-end";

type LabelPlacement = "bottom" | "end" | "start" | "top";

type ColorType =
  | "primary"
  | "secondary"
  | "default"
  | "error"
  | "info"
  | "success"
  | "warning"
  | string; // Allow any string for custom colors

interface CheckboxProps extends Omit<MuiCheckboxProps, "onChange" | "color"> {
  name: string;
  label?: string;
  labelPlacement?: LabelPlacement;
  value: boolean;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  color?: ColorType;
  fullWidth?: boolean;
  errorMessage?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label = "Checkbox Label",
  labelPlacement = "start",
  value = false,
  tooltip = "",
  tooltipPlacement = "top-start",
  color = "primary",
  fullWidth = false,
  errorMessage = null,
  onChange,
  ...rest
}) => {
  const isCustomColor = ![
    "primary",
    "secondary",
    "default",
    "error",
    "info",
    "success",
    "warning",
  ].includes(color);

  return (
    <FormControl
      variant="outlined"
      fullWidth={fullWidth}
      {...(errorMessage && { error: true })}
    >
      <Tooltip title={tooltip} arrow placement={tooltipPlacement}>
        <FormControlLabel
          labelPlacement={labelPlacement || "end"}
          control={
            <MuiCheckbox
              name={name}
              aria-label={`Toggle ${label || "Checkbox"} status`}
              checked={value}
              {...(isCustomColor
                ? { sx: { color } } // Apply custom color using the sx prop
                : { color: color as MuiCheckboxProps["color"] })} // Use predefined Material-UI colors with proper type casting
              onChange={onChange}
              {...rest}
            />
          }
          label={label || "checkbox name"}
        ></FormControlLabel>
      </Tooltip>
      {/* {label && <span>{label}</span>} */}
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default Checkbox;
