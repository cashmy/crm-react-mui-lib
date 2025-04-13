/** Author
 * @auth Cash Myers
 * @github [https://github.com/cashmy]
 * @create date 2023-02-16 19:54:50
 * @modify date 2023-02-16 19:54:50
 * @desc [description]
 */

// #region [General imports]
import React, { useEffect, useState, Fragment } from "react";
import { useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { SelectChangeEvent } from "@mui/material/Select";

import ActionButton from "../ActionButton";
import CloseIcon from "@mui/icons-material/Close";
// #endregion

// Define the props interface
interface PageDialogProps {
  title?: string;
  children?: React.ReactNode;
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
  fullWidth?: boolean;
  titleColor?: string;
  displayWidth?: boolean;
  maxWidthSet?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const PageDialog: React.FC<PageDialogProps> = ({
  title = "Dialog Title",
  children,
  openPopup,
  setOpenPopup,
  fullWidth = true,
  titleColor,
  displayWidth = true,
  maxWidthSet,
  size = "md",
}) => {
  // #region //* [Local State]
  const theme = useTheme();
  const [maxWidth, setMaxWidth] = useState<
    "xs" | "sm" | "md" | "lg" | "xl" | false
  >(size);
  // #endregion

  useEffect(() => {
    if (maxWidthSet) {
      setMaxWidth(maxWidthSet);
    }
  }, [maxWidthSet]);

  // #region //* Event Handlers
  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleMaxWidthChange = (
    event: SelectChangeEvent<false | "xs" | "sm" | "md" | "lg" | "xl">
  ) => {
    setMaxWidth(event.target.value as "xs" | "sm" | "md" | "lg" | "xl" | false);
  };
  // #endregion

  return (
    <Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openPopup}
        onClose={handleClose}
      >
        <DialogTitle sx={{ display: "flex" }}>
          <Paper
            sx={{
              padding: theme.spacing(1),
              marginRight: theme.spacing(3),
              backgroundColor: titleColor || "rgba(0, 0, 0, 0.2)",
              color: theme.palette.getContrastText(
                titleColor || "rgba(0, 0, 0, 0.2)"
              ),
              flexGrow: 1,
              mt: theme.spacing(2),
              display: "flex",
              alignItems: "center",
              borderRadius: "12px !important",
            }}
          >
            <Typography variant="h4" sx={{ ml: 2 }}>
              {title}
            </Typography>
          </Paper>

          {displayWidth && (
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                sx={{ marginTop: theme.spacing(1) }}
                variant="outlined"
                value={maxWidth}
                label="maxWidth"
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value="false">false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
          )}

          <ActionButton color="secondary" onClick={handleClose}>
            <CloseIcon />
          </ActionButton>
        </DialogTitle>

        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default PageDialog;
