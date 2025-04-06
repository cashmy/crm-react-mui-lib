// src/themes.js
import { createTheme } from "@mui/material/styles";

// Define the light theme
const lightTheme = createTheme({
  palette: {
    mode: "light", // Light mode
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark mode
    primary: {
      main: "#90caf9",
      light: "#e3f2fd",
      dark: "#42a5f5",
      contrastText: "#000000",
    },
    secondary: {
      main: "#f48fb1",
      light: "#f8bbd0",
      dark: "#c2185b",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

// Export both themes
export { lightTheme, darkTheme };
