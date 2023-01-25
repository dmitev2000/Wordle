import Letter from "./Letter";
import React from "react";

const Guess = ({ guess }) => {
  return (
    <div className="guess">
      {guess.split("").map((l, i) => {
        return <Letter letter={l} index={i} key={i} />;
      })}
    </div>
  );
};

export default Guess;
