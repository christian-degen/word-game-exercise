import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import LetterRow from "../LetterRow/LetterRow";

function GameField({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((y) => {
        return <LetterRow key={y} y={y} guesses={guesses} answer={answer} />;
      })}
    </div>
  );
}

export default GameField;
