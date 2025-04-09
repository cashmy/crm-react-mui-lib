import React from "react";

import {
  Tooltip,
  TextField,
  TextFieldProps,
  InputAdornment,
} from "@mui/material";
import { TooltipPlacement, TextFieldSize, Variant } from "../../common/types";
import ShortTextIcon from "@mui/icons-material/ShortText";

// type Size = "small" | "medium";

interface TextFieldIconProps extends Omit<TextFieldProps, "onChange"> {
  name: string;
  label: string;
  value: string | number;
  iconPlacement?: "start" | "end";
  icon?: React.ReactNode;
  size?: TextFieldSize;
  variant?: Variant;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  fullWidth?: boolean;
  errorMessage?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldIcon: React.FC<TextFieldIconProps> = ({
  name,
  label = "Text Field Label",
  value = "",
  size = "medium",
  variant = "outlined",
  icon = <ShortTextIcon />,
  iconPlacement = "end",
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
      <TextField
        name={name}
        label={label}
        value={value}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        error={!!errorMessage}
        helperText={errorMessage || ""}
        onChange={onChange}
        slotProps={{
          input: {
            ...(iconPlacement === "start" && {
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              ),
            }),
            ...(iconPlacement === "end" && {
              endAdornment: (
                <InputAdornment position="end">{icon}</InputAdornment>
              ),
            }),
          },
        }}
        {...rest}
      />
    </Tooltip>
  );
};

export default TextFieldIcon;
