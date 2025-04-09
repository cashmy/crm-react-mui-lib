import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Tooltip,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from "@mui/material";
import { TooltipPlacement } from "../../common/types";

interface SwitchProps extends Omit<MuiSwitchProps, "onChange"> {
  name: string;
  label?: string;
  value: boolean;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  errorMessage?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({
  name,
  label = "Switch Label",
  value = false,
  tooltip = "",
  tooltipPlacement = "top-start",
  errorMessage = null,
  onChange,
  ...rest
}) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      {...(errorMessage && { error: true })}
    >
      <Tooltip title={tooltip} arrow placement={tooltipPlacement}>
        <FormControlLabel
          control={
            <MuiSwitch
              name={name}
              aria-label={`Toggle ${label || "Switch"} status`}
              checked={value}
              onChange={onChange}
              {...rest}
            />
          }
          label={label}
        />
      </Tooltip>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default Switch;
