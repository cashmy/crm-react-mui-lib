import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Radio,
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from "@mui/material";

interface RadioGroupProps extends Omit<MuiRadioGroupProps, "onChange"> {
  name: string;
  label?: string;
  value: string;
  color: "primary" | "secondary" | "default";
  errorMessage?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: { id: string | number; title: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label = "Radio Group Label",
  value = "",
  color = "primary",
  errorMessage = null,
  onChange,
  items,
  ...rest
}) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      {...(errorMessage && { error: true })}
    >
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup name={name} value={value} onChange={onChange} {...rest}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id.toString()}
            control={<Radio color={color || "secondary"} />}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default RadioGroup;
