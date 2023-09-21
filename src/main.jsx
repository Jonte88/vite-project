import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/header.jsx";
import Test from "./components/Test_API.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Test />
  </React.StrictMode>
);
