/**
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2022-06-11 14:47:32
 * @modify date 2022-06-11 14:47:32
 * @desc Component wrapper around the Mui DatePicker component.
 *       Provides the auto-inclusion of Localization and the ability to
 *       convert the date value to the default event parameter.
 */

import React from "react";
import { TextField } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

interface DatePickerProps
  extends Omit<MuiDatePickerProps<Date>, "onChange" | "renderInput"> {
  name?: string;
  label?: string;
  value: Date | null;
  error?: string | null;
  onChange: (date: Date | null) => void;
  minDate?: Date; // Add this
  maxDate?: Date; // Add this
}

const DatePicker: React.FC<DatePickerProps> = ({
  name = "sampleDate",
  label = "Date",
  value,
  error = null,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        format="MM/dd/yyyy"
        name={name}
        value={value}
        onChange={(newValue) => onChange(newValue)}
        {...(error && { error: true, helperText: error })}
        slots={{ textField: TextField }}
        // {...rest}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
export type { DatePickerProps };
