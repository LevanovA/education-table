import React from "react";
import ReactDOM from "react-dom";
import Monitor from "./pages/Monitor";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Monitor />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
