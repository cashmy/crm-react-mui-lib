// ActionButton.tsx
import { ReactNode } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  Tooltip,
  useTheme,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

type ActionType =
  | "Add"
  | "Edit"
  | "Delete"
  | "Archive"
  | "Unarchive"
  | "Custom";

interface ActionButtonProps extends MuiButtonProps {
  actionType?: ActionType; // New prop for predefined action types
  backgroundColor?: string;
  tooltipText?: string; // Optional tooltip text
  customIcon?: ReactNode; // Optional custom icon
}

const ActionButton = ({
  actionType = "Edit",
  customIcon,
  backgroundColor,
  onClick = () => alert("Action Button clicked"),
  tooltipText,
  ...rest
}: ActionButtonProps) => {
  const theme = useTheme();

  // Map action types to specific icons
  const getIcon = () => {
    switch (actionType) {
      case "Add":
        return <AddIcon />;
      case "Edit":
        return <EditOutlinedIcon />;
      case "Delete":
        return <DeleteIcon />;
      case "Archive":
        return <ArchiveIcon />;
      case "Unarchive":
        return <UnarchiveIcon />;
      case "Custom":
        return customIcon || null; // Use customIcon for "Custom" type
      default:
        return null;
    }
  };

  let icon = getIcon();

  if (actionType === "Custom" && !customIcon) {
    icon = <DashboardCustomizeIcon />; // Default icon for "Custom" if none provided
  }

  return (
    <>
      {tooltipText ? (
        <Tooltip title={tooltipText}>
          <MuiButton
            sx={{ minWidth: 0, margin: theme.spacing(0.5) }}
            onClick={onClick}
            {...rest}
            style={{
              backgroundColor: backgroundColor || rest.style?.backgroundColor, // Apply backgroundColor if provided
              ...rest.style, // Merge with other styles
            }}
          >
            {icon}
            {/* {children} */}
          </MuiButton>
        </Tooltip>
      ) : (
        <MuiButton
          sx={{ minWidth: 0, margin: theme.spacing(0.5) }}
          onClick={onClick}
          {...rest}
          style={{
            backgroundColor: backgroundColor || rest.style?.backgroundColor, // Apply backgroundColor if provided
            ...rest.style, // Merge with other styles
          }}
        >
          {icon}
        </MuiButton>
      )}
    </>
  );
};

export default ActionButton;
export type { ActionButtonProps };
