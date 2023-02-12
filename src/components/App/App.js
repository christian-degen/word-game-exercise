import React from "react";
import Game from "../Game";
import Header from "../Header";
import { sample } from "../../utils";
import { WORDS } from "../../data";

function App() {
  const [answer] = React.useState(sample(WORDS));

  console.info({ answer });

  return (
    <div className="wrapper">
      <Header />
      <Game answer={answer} />
    </div>
  );
}

export default App;
