import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./index.css";
import { router } from "./router";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <RouterProvider router={router} />
        </SnackbarProvider>
      </StyledEngineProvider>
    </RecoilRoot>
  </React.StrictMode>
);
