import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
  useTheme,
} from "@mui/material";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import Button from "../Button";

interface ConfirmDialogProps {
  confirmDialog: {
    isOpen: boolean;
    title: string;
    subTitle: string;
    onConfirm: () => void;
  };
  setConfirmDialog: (dialogState: {
    isOpen: boolean;
    title: string;
    subTitle: string;
    onConfirm: () => void;
  }) => void;
  customIcon?: React.ReactNode;
}

const ConfirmDialog = ({
  confirmDialog,
  setConfirmDialog,
  customIcon,
}: ConfirmDialogProps) => {
  const theme = useTheme();

  const icon = customIcon || <NotListedLocationIcon />;

  return (
    <MuiDialog
      sx={{
        padding: theme.spacing(2),
        position: "absolute",
        top: theme.spacing(6),
      }}
      open={confirmDialog.isOpen}
    >
      <MuiDialogTitle sx={{ textAlign: "center" }}>
        <MuiIconButton
          sx={{
            color: theme.palette.secondary.main,
            "&:hover": {
              color: theme.palette.secondary.main,
              cursor: "default",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "8rem",
            },
          }}
          disableRipple
          size="large"
        >
          {icon}
        </MuiIconButton>
      </MuiDialogTitle>
      <MuiDialogContent sx={{ textAlign: "center" }}>
        <MuiTypography variant="h6">{confirmDialog.title}</MuiTypography>
        <MuiTypography variant="subtitle2">
          {confirmDialog.subTitle}
        </MuiTypography>
      </MuiDialogContent>
      <MuiDialogActions sx={{ justifyContent: "center" }}>
        <Button
          label="No"
          color="primary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Button
          label="Yes"
          color="secondary"
          onClick={confirmDialog.onConfirm}
        />
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default ConfirmDialog;
export type { ConfirmDialogProps };
