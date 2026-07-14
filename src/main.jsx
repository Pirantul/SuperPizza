import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import packageJson from "../package.json";

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

const versionEl = document.createElement("div");
versionEl.className = "app-version";
versionEl.textContent = `v${packageJson.version}`;
versionEl.setAttribute("aria-label", `Version ${packageJson.version}`);
document.body.appendChild(versionEl);
