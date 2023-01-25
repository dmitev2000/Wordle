import { GameContextProvider } from "./context/GameContext";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
