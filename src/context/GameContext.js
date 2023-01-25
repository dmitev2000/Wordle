import { createContext, useState } from "react";

const GameContext = createContext({
  gameStarted: false,
  currentGuess: null,
  totalGuesses: 0,
  correctWord: null,
  pastGuesses: [],
  allWords: [],
  disable: false,
  startGame: () => {},
  newGuess: (value) => {},
  initWords: (arr) => {},
  newGame: () => {},
});

export function GameContextProvider(props) {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentGuess, setCurrentGuess] = useState("");
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [correctWord, setCorrectWord] = useState("");
  const [pastGuesses, setPastGuesses] = useState([]);
  const [allWords, setAllWords] = useState([]);
  const [disable, setDiasble] = useState(false);

  function startGame() {
    const index = Math.floor(Math.random() * allWords.length);
    setCorrectWord(() => allWords[index]);
    setGameStarted(() => true);
  }

  function newGame() {
    setCurrentGuess(() => "");
    setTotalGuesses(() => 0);
    setPastGuesses(() => []);
    setDiasble(() => false);
    startGame();
  }

  function initWords(arr) {
    setAllWords(() => arr);
  }

  function newGuess(guess) {
    if (totalGuesses + 1 === 5) {
      setDiasble(() => true);
    }
    setTotalGuesses((total) => total + 1);
    setCurrentGuess(() => guess);
    setPastGuesses((prev) => {
      return prev.concat(guess);
    });
  }

  const context = {
    allWords,
    gameStarted,
    currentGuess,
    totalGuesses,
    correctWord,
    pastGuesses,
    disable,
    startGame,
    newGuess,
    initWords,
    newGame,
  };

  return (
    <GameContext.Provider value={context}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext;
