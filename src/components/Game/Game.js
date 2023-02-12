import React from "react";
import InputField from "../InputField/InputField";
import GameField from "../GameField/GameField";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { getIsVisibleDefault } from "../../game-helpers";

function Game({ answer }) {
  const [guesses, setGuesses] = React.useState([]);
  const [input, setInput] = React.useState("");

  const [isVisible, setIsVisible] = React.useState(getIsVisibleDefault());

  let sadBanner = isVisible.sadBanner ? (
    <SadBanner answer={answer} />
  ) : undefined;

  let happyBanner = isVisible.happyBanner ? (
    <HappyBanner guessCount={guesses.length} />
  ) : undefined;

  return (
    <div className="game-wrapper">
      <GameField guesses={guesses} answer={answer} />
      <InputField
        input={input}
        setInput={setInput}
        guesses={guesses}
        setGuesses={setGuesses}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        answer={answer}
      />
      {happyBanner}
      {sadBanner}
    </div>
  );
}

export default Game;
