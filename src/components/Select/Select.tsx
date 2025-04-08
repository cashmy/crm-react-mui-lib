import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  SelectChangeEvent,
} from "@mui/material";

interface Option {
  id: string | number;
  title: string;
}

interface SelectProps extends Omit<MuiSelectProps, "onChange"> {
  name: string;
  label?: string;
  value: string | number;
  allowNone: boolean;
  errorMessage?: string | null;
  onChange: (
    event:
      | React.ChangeEvent<{ name?: string; value: unknown }>
      | SelectChangeEvent<unknown>
  ) => void;
  options: Option[];
}

const Select: React.FC<SelectProps> = ({
  name,
  label = "Select Label",
  value = "",
  allowNone = true,
  errorMessage = null,
  onChange,
  options,
  ...rest
}) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      {...(errorMessage && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        variant="filled"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        // onChange={(event) => onChange(event as SelectChangeEvent<unknown>)}
        fullWidth
        {...rest}
      >
        {allowNone && (
          <MenuItem key="999" value="None">
            None
          </MenuItem>
        )}
        {options &&
          options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
      </MuiSelect>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
