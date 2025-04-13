/** Author
 *
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2022-06-11 14:47:32
 * @modify date 2022-06-11 14:47:32
 * @desc Component wrapper around the Mui TimePicker component.
 *         Provides a the auto-inclusion of Localization and the ability to
 *         convert the date value to the default event parameter.
 */

import React from "react";
import { TextField } from "@mui/material";
import {
  LocalizationProvider,
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

interface TimePickerProps
  extends Omit<MuiTimePickerProps<Date>, "onChange" | "renderInput"> {
  name?: string;
  label?: string;
  value: Date | null;
  ampm: boolean;
  format: string;
  error?: string | null;
  onChange: (date: Date | null) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  name = "sampleTime",
  label = "Time",
  value,
  ampm = true, // Default to true for 12-hour format
  format = "hh:mm a",
  error = null,
  onChange,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiTimePicker
        label={label}
        format={format}
        name={name}
        value={value}
        ampm={ampm}
        onChange={(newValue) => onChange(newValue)}
        slots={{ textField: TextField }}
        slotProps={{
          textField: {
            error: !!error,
            helperText: error || "",
          },
        }}
        {...rest} // Spread the rest of the props to the TimePicker
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
export type { TimePickerProps };
