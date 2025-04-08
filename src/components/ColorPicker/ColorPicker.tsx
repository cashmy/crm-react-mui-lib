/**
 * @author Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2022-06-11 14:11:24
 * @modify date 2022-06-11 14:11:24
 *         date 2025-05-17 14:11:24 - Converted from JSX to TSX
 * @desc   Custom component with a Text field and popup Colorpicker
 *         Allows use of the color picker in a styled modal/dialog.
 *         Uses two(2) helper functions, one(1) hook, and one (1) callback function.
 *           - Uses the getContrastText helper function to get the contrast color of the background color.
 *           - Uses the useClickOutside helper function to handle the click outside of the modal/dialog.
 *           - Uses the useRef hook to handle the click outside of the modal/dialog.
 *           - Uses the useCallback function to handle change and pass value to parent.
 */

import React, { Fragment, useState, useRef, useCallback } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import useClickOutside from "../../helpers/useClickOutside";
import TextContrast from "../../helpers/TextContrast";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps extends Omit<TextFieldProps, "onChange" | "error"> {
  name?: string;
  label?: string;
  value: string;
  error?: string | null;
  onChange: (event: React.ChangeEvent<{ name: string; value: string }>) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  name = "cpkColor",
  label = "Color",
  value,
  error,
  variant = "filled",
  onChange,
  ...rest
}) => {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, toggle] = useState(false);

  // * Event Handlers
  const handleClose = useCallback(() => toggle(false), []);
  useClickOutside(popover, handleClose);

  const handleChangeProp = useCallback(
    (color: string, event: React.ChangeEvent<HTMLInputElement>) => {
      const tempProp = {
        name: name,
        value: color,
      };
      const customEvent = Object.assign({}, event, {
        target: { ...event.target, ...tempProp },
      });
      onChange(customEvent);
    },
    [name, onChange]
  );

  return (
    <Fragment>
      <TextField
        variant={variant || "filled"}
        size="small"
        label={label || "Color"}
        name={name || "cpkColor"}
        value={value}
        onChange={onChange}
        {...(error && { error: true, helperText: error })}
        {...rest}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle color picker"
                  onClick={() => toggle(true)}
                  style={{
                    backgroundColor: value,
                    color: TextContrast.getTextContrast(value),
                  }}
                >
                  {isOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <div>
        {isOpen && (
          <div ref={popover}>
            <HexColorPicker
              color={value}
              onChange={(color) =>
                handleChangeProp(
                  color,
                  {} as React.ChangeEvent<HTMLInputElement>
                )
              }
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ColorPicker;
export type { ColorPickerProps };
