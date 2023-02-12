import React from "react";
import { handleInputEvent, handleGuess } from "../../game-helpers";

function InputField({
  input,
  setInput,
  guesses,
  setGuesses,
  isVisible,
  setIsVisible,
  answer,
}) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(input, setInput, guesses, setGuesses, setIsVisible, answer);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={!isVisible.inputField}
        autoFocus
        value={input}
        onChange={(event) => {
          handleInputEvent(event, setInput);
        }}
      />
    </form>
  );
}

export default InputField;
