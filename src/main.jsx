import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Test from "./components/Test_API.jsx";
import "./App.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>
);
