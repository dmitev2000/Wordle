import GameContext from "../context/GameContext";
import React, { useContext } from "react";
import "../styles/style.css";

const Start = () => {
  const GameCtx = useContext(GameContext);
  return (
    <div className="app">
      <div className="box">
        <h1>Wordle</h1>
      </div>
      <button className="start-btn" onClick={GameCtx.startGame}>Start game</button>
    </div>
  );
};

export default Start;
