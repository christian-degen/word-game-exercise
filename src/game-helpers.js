import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS } from "./constants";
import { range } from "./utils";

export function handleInputEvent(event, setInput) {
  const nextInput = event.target.value.toUpperCase();
  if (nextInput.length <= NUM_OF_LETTERS) {
    setInput(nextInput);
  }
}

export function handleGuess(
  input,
  setInput,
  guesses,
  setGuesses,
  setIsVisible,
  answer
) {
  if (input.length === NUM_OF_LETTERS) {
    if (!guesses.includes(input)) {
      if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
        const nextGuesses = [...guesses, input];
        setGuesses(nextGuesses);
      }
      setVisualState(input, guesses.length + 1, answer, setIsVisible);
    }
    setInput("");
  }
}

export function getLetterInfos(guess, answer) {
  return guess.split("").map((c, i) => {
    let status = "incorrect";

    if (answer[i] === c) {
      status = "correct";
    } else if (answer.includes(c)) {
      status = "misplaced";
    }

    return { letter: c, status: status };
  });
}

export function getEmptyLetterInfos() {
  return range(0, NUM_OF_LETTERS).map(() => {
    return { letter: "", status: "" };
  });
}

export function getIsVisibleDefault() {
  return {
    inputField: true,
    happyBanner: false,
    sadBanner: false,
  };
}

function getIsVisibleHappy() {
  return {
    inputField: false,
    happyBanner: true,
    sadBanner: false,
  };
}

function getIsVisibleSad() {
  return {
    inputField: false,
    happyBanner: false,
    sadBanner: true,
  };
}

export function setVisualState(input, guessCount, answer, setIsVisible) {
  const letterInfos = getLetterInfos(input, answer);
  const states = letterInfos.map((letterInfo) => {
    return letterInfo.status;
  });

  if (states.every((status) => status === "correct")) {
    setIsVisible(getIsVisibleHappy());
  } else if (guessCount >= NUM_OF_GUESSES_ALLOWED) {
    setIsVisible(getIsVisibleSad);
  }
}
