/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Fab, Grid, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { ColorType } from "../../common/types";

interface TitleBarProps {
  componentTitle: string;
  addFab: boolean;
  addToolTipText: string;
  returnFab: boolean;
  primaryColor: ColorType | string;
  secondaryColor: ColorType | string;
  backgroundColor: string;
  handleAdd: (event: React.MouseEvent<HTMLElement>) => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const TitleBar: React.FC<TitleBarProps> = ({
  componentTitle,
  addFab = false,
  addToolTipText = "",
  returnFab = false,
  primaryColor = "primary",
  secondaryColor = "secondary",
  backgroundColor,
  handleAdd,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const returnToParent = () => {
    navigate(-1);
  };

  const defaultHandleAdd = () => {
    alert("Adding a new item... \nNot yet implemented");
  };

  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Item sx={{ paddingTop: theme.spacing(2) }}>
          <Paper
            sx={{
              padding: theme.spacing(2),
              textAlign: "center",
              backgroundColor:
                backgroundColor || theme.palette.background.paper,
              color: theme.palette.getContrastText(
                backgroundColor || theme.palette.background.paper
              ),
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Toolbar>
              <Typography variant="h4" id="titlebar">
                {componentTitle || "Component Title Goes Here"}
              </Typography>

              {returnFab && (
                <Tooltip title="Return to previous display">
                  <Fab
                    sx={{
                      position: "absolute",
                      right: addFab ? theme.spacing(9) : theme.spacing(2),
                      backgroundColor:
                        typeof secondaryColor === "string" &&
                        secondaryColor.startsWith("#")
                          ? secondaryColor
                          : undefined, // Use undefined if `secondaryColor` is a valid `ColorType`
                    }}
                    color={
                      typeof secondaryColor === "string" &&
                      secondaryColor.startsWith("#")
                        ? undefined
                        : (secondaryColor as any)
                    } // Use the `color` prop only if `secondaryColor` is a valid `ColorType`
                    aria-label="return to previous display"
                    size="small"
                    onClick={returnToParent}
                  >
                    <ArrowBackIcon />
                  </Fab>
                </Tooltip>
              )}

              {addFab && (
                <Tooltip title={addToolTipText || "Add a new item"}>
                  <Fab
                    sx={{
                      position: "absolute",
                      right: theme.spacing(2),
                      backgroundColor:
                        typeof primaryColor === "string" &&
                        primaryColor.startsWith("#")
                          ? primaryColor
                          : undefined, // Use undefined if `primaryColor` is a valid `ColorType`
                    }}
                    color={
                      typeof primaryColor === "string" &&
                      primaryColor.startsWith("#")
                        ? undefined
                        : (primaryColor as any)
                    } // Use the `color` prop only if `primaryColor` is a valid `ColorType`
                    aria-label={
                      addToolTipText ? String(addToolTipText) : "Add a new item"
                    }
                    size="small"
                    onClick={handleAdd || defaultHandleAdd}
                  >
                    <AddIcon />
                  </Fab>
                </Tooltip>
              )}
            </Toolbar>
          </Paper>
        </Item>
      </Grid>
    </Grid>
  );
};

export default TitleBar;
