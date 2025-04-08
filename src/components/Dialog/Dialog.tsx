import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogProps as MuiDialogProps,
  Typography as MuiTypography,
  useTheme,
} from "@mui/material";
import ActionButton from "../ActionButton/ActionButton";
import CloseIcon from "@mui/icons-material/Close";

interface DialogProps extends MuiDialogProps {
  title: string;
  children?: React.ReactNode;
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  children,
  openPopup,
  setOpenPopup,
  fullWidth = true,
}) => {
  const theme = useTheme();

  return (
    <MuiDialog
      sx={{
        padding: theme.spacing(2),
        position: "absolute",
        top: theme.spacing(2),
        // fullWidth: true,
      }}
      style={{ width: fullWidth ? "100%" : "auto" }}
      open={openPopup}
      maxWidth="md"
    >
      <MuiDialogTitle sx={{ paddingRight: "0px" }}>
        <div style={{ display: "flex" }}>
          <MuiTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </MuiTypography>
          <ActionButton
            actionType="Custom"
            customIcon={<CloseIcon />}
            color="secondary"
            onClick={() => setOpenPopup(false)}
          ></ActionButton>
        </div>
      </MuiDialogTitle>

      <MuiDialogContent dividers>{children}</MuiDialogContent>
    </MuiDialog>
  );
};

export default Dialog;
export type { DialogProps };
