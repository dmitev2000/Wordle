import React, { useContext, useRef, useState } from "react";
import GameContext from "../context/GameContext";
import Guess from "./Guess";

const Game = () => {
  const gameCtx = useContext(GameContext);
  const guessInputRef = useRef();
  const [showCorrect, setShowCorrect] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isOver, setIsOver] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    if (gameCtx.disable) {
      return;
    }
    if (guessInputRef.current.value.toLowerCase() === gameCtx.correctWord) {
      setIsCorrect(() => true);
    }
    if (gameCtx.totalGuesses + 1 === 5) {
      setIsOver(() => true);
    }
    gameCtx.newGuess(guessInputRef.current.value);
    guessInputRef.current.value = "";
  }

  return (
    <div>
      <p>Guess: {gameCtx.totalGuesses} / 5</p>
      <div id="correct-word-p">
        <label htmlFor="show-correct-word">Show correct word</label>
        <input
          type="checkbox"
          id="show-correct-word"
          checked={showCorrect}
          onChange={() => {
            setShowCorrect((prev) => !prev);
          }}
        />
        <p className={showCorrect ? "show" : "hide"}>{gameCtx.correctWord}</p>
      </div>
      {isCorrect && <p className="congrats">Well done.</p>}
      {gameCtx.pastGuesses.map((g, i) => {
        return <Guess guess={g} key={i} />;
      })}
      <hr />
      {isOver && !isCorrect && (
        <p className="over">
          No more attempts... The correct word was {gameCtx.correctWord}
        </p>
      )}
      {!isCorrect && !isOver ? (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            maxLength={5}
            minLength={5}
            required
            ref={guessInputRef}
          />
          <button disabled={gameCtx.disable} type="submit">
            Guess
          </button>
        </form>
      ) : (
        <>
          <button
            onClick={() => {
              gameCtx.newGame();
              setIsOver(() => false);
              setIsCorrect(() => false);
              setShowCorrect(() => false);
            }}
          >
            New game
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
