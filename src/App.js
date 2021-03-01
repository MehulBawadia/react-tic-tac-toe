import "./App.css";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div>
      <h1 className="title">TicTacToe Game in ReactJs</h1>

      <div className="App">
        <div className="board">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
