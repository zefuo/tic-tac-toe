import { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //True is for X, false is for O.
  const [turns, setTurns] = useState(true);
  const [counter, setCounter] = useState(0);
  const [winner, setWinner] = useState(null);

  function handleClick(i: number) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();

    if (turns) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    calculateWinner(nextSquares);
    setTurns(!turns);
    setCounter(counter + 1);
    setSquares(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        return squares[a];
      }
    }
    return null;
  }

  function clearBoard() {
    setSquares(Array(9).fill(null));
    setTurns(true);
    setCounter(0);
    setWinner(null);
  }

  return (
    <>
      <div className="turn"> Next Player: {turns ? "X" : "O"}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div>
        <h1> Winner is {winner}</h1>
        <button onClick={clearBoard}>Clear board</button>
      </div>
    </>
  );
}
export default Board;
