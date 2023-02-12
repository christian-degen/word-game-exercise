import React from "react";
import { getLetterInfos, getEmptyLetterInfos } from "../../game-helpers";

function LetterRow({ y, guesses, answer }) {
  const letterInfos =
    guesses.length > y
      ? getLetterInfos(guesses[y], answer)
      : getEmptyLetterInfos();

  const spans = letterInfos.map((letterInfo, i) => {
    let className = "cell " + letterInfo.status;
    return (
      <span key={i} className={className}>
        {letterInfo.letter}
      </span>
    );
  });

  return <p className="guess">{spans}</p>;
}

export default LetterRow;
