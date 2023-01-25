/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import GameContext from "./context/GameContext";
import Start from "./components/Start";
import Game from "./components/Game";
import axios from "axios";
import "./App.css";

function App() {
  const GameCtx = useContext(GameContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt"
      )
      .then((res) => {
        GameCtx.initWords(res.data.split("\n"));
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (loading) {
    return (
      <div className="app">
        <h1>Loading ...</h1>;
      </div>
    );
  }

  return (
    <div className="app">{!GameCtx.gameStarted ? <Start /> : <Game />}</div>
  );
}

export default App;
