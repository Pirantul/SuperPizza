import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { assetUrl } from "./utils/assetUrl";

document.documentElement.style.setProperty(
  "--weight-icon",
  `url(${assetUrl("img/weight.svg")})`
);

const theme = createTheme({
  palette: {
    primary: { main: "#2e7d32" },
    secondary: { main: "#e63547" },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
