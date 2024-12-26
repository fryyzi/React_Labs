import React, { useState } from 'react';
import Board from '../Board/Board';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    console.log(`Clicked on index: ${index}`);  // Перевірка, чи натискається клітинка
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Переможець: ${winner}`
    : `Наступний хід: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <p>{status}</p>
      <Board squares={squares} onSquareClick={handleClick} />
    </div>
  );
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

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
