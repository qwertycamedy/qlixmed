import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "@store/store";
import { Provider } from "react-redux";

import "@assets/styles/_vars.scss";
import "@assets/styles/_fonts.scss";
import "@assets/styles/_keyframes.scss";
import "@assets/styles/_settings.scss";
import "@assets/styles/_ui.scss";

import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
