import React from "react";

import {
  Tooltip,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { TooltipPlacement, TextFieldSize, Variant } from "../../common/types";

// type Size = "small" | "medium";

interface TextFieldProps extends Omit<MuiTextFieldProps, "onChange"> {
  name: string;
  label: string;
  value: string | number;
  size?: TextFieldSize;
  variant?: Variant;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  fullWidth?: boolean;
  errorMessage?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label = "Text Field Label",
  value = "",
  size = "medium",
  variant = "outlined",
  tooltip = "",
  tooltipPlacement = "top-start",
  fullWidth = false,
  errorMessage = null,
  onChange,
  ...rest
}) => {
  return (
    <Tooltip
      title={tooltip || `Add/edit data for ${label} `}
      placement={tooltipPlacement}
      arrow
    >
      <MuiTextField
        name={name}
        label={label}
        value={value}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        error={!!errorMessage}
        helperText={errorMessage || ""}
        onChange={onChange}
        {...rest}
      />
    </Tooltip>
  );
};

export default TextField;
