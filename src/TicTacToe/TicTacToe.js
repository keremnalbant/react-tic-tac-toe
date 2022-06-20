import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    let j = 0;

    for (let i = 0; i < squares.length; i++) {
      if (squares[i]) j++;
      if (j > 8) setWinner("Berabere");
    }

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
      }
    }
  };

  const handleClick = (num) => {
    if (cells[num] === "" && (winner === undefined || winner === null)) {
      let squares = [...cells];

      if (turn === "x") {
        squares[num] = "x";
        setTurn("o");
      } else {
        squares[num] = "o";
        setTurn("x");
      }

      checkForWinner(squares);
      setCells(squares);
    }
  };

  const handleReset = () => {
    setCells(Array(9).fill(""));
    setWinner(null);
    setTurn("x");
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div className="container">
      <h4 className="mt-3 mb-3 text-center">{turn.toUpperCase()}'s turn</h4>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          {winner !== "Berabere" && <h4 className="mt-3">Winner is {winner}!</h4>}
          {winner === "Berabere" && <h4 className="mt-3">Berabere</h4>}
          <button className="btn btn-primary mt-2" onClick={() => handleReset()}>
            Play Again
          </button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
