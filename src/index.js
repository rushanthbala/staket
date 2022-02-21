import React from "react";
import ReactDOM from "react-dom";
import App from "./page/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme/theme";
import { StylesProvider,createGenerateClassName  } from "@mui/styles";

// import { createTheme } from '@material-ui/core/styles'
ReactDOM.render(
  <React.StrictMode>
    <StylesProvider generateClassName={generateClassName} >
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
