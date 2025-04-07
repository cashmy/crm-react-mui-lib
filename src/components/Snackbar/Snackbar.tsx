import React from "react";
import { Alert, Snackbar, useTheme } from "@mui/material";

interface NotificationProps {
  notify: {
    isOpen: boolean;
    message: string;
    type?: "success" | "error" | "warning" | "info"; // Alert severity types
  };
  setNotify: (notify: {
    isOpen: boolean;
    message: string;
    type?: string;
  }) => void;
}

const Notification: React.FC<NotificationProps> = ({ notify, setNotify }) => {
  const theme = useTheme();

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      sx={{ top: theme.spacing(9) }}
      open={notify.isOpen}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type || "info"} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
export type { NotificationProps };
