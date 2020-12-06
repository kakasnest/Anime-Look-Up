import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ErrorBoundary>,
  rootElement
);
