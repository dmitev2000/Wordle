import React from "react";
import GameContext from "../context/GameContext";
import { useContext } from "react";

const Letter = ({ letter, index }) => {
  const gameCtx = useContext(GameContext);

  let className = "letter";
  if (letter.toLowerCase() === gameCtx.correctWord[index]) {
    className += " correct";
  } else if (!gameCtx.correctWord.includes(letter.toLowerCase())) {
    className += " not-present";
  } else if (
    gameCtx.correctWord.includes(letter.toLowerCase()) &&
    letter.toLowerCase() !== gameCtx.correctWord[index]
  ) {
    className += " on-wrong-place";
  }

  return <div className={className}>{letter}</div>;
};

export default Letter;
