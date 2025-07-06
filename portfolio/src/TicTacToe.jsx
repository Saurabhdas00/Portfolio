import React, { useState, useEffect } from 'react';

const emptyBoard = Array(9).fill(null);
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

function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function getRandomMove(board) {
  const empty = board.map((cell, idx) => cell ? null : idx).filter(idx => idx !== null);
  if (empty.length === 0) return null;
  return empty[Math.floor(Math.random() * empty.length)];
}

function getSmartMove(board) {
  // Try to win
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const copy = board.slice();
      copy[i] = 'O';
      if (calculateWinner(copy) === 'O') return i;
    }
  }
  // Block player win
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const copy = board.slice();
      copy[i] = 'X';
      if (calculateWinner(copy) === 'X') return i;
    }
  }
  // Otherwise, random
  return getRandomMove(board);
}

const TicTacToe = () => {
  const [board, setBoard] = useState(emptyBoard);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // true: player (X), false: computer (O)
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  function handleClick(idx) {
    if (board[idx] || winner || !isPlayerTurn) return;
    const newBoard = board.slice();
    newBoard[idx] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  }

  // Computer move effect
  useEffect(() => {
    if (!isPlayerTurn && !winner && !isDraw) {
      const move = getSmartMove(board);
      if (move !== null) {
        const newBoard = board.slice();
        newBoard[move] = 'O';
        setTimeout(() => {
          setBoard(newBoard);
          setIsPlayerTurn(true);
        }, 500);
      }
    }
    // eslint-disable-next-line
  }, [isPlayerTurn, board, winner, isDraw]);

  function handleReset() {
    setBoard(emptyBoard);
    setIsPlayerTurn(true);
  }

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h3 style={{ fontFamily: 'Press Start 2P, monospace', color: '#00ff00', textShadow: '0 0 5px #00ff00' }}>Tic Tac Toe (You vs Computer)</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 64px)',
        gridGap: '8px',
        justifyContent: 'center',
        margin: '1rem auto',
      }}>
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            style={{
              width: 64,
              height: 64,
              fontSize: '2rem',
              fontFamily: 'Press Start 2P, monospace',
              color: cell === 'X' ? '#ffd700' : '#00eaff',
              background: '#181c2b',
              border: '3px solid #00ff00',
              borderRadius: 8,
              boxShadow: '0 0 8px #00ff00',
              cursor: cell || winner || !isPlayerTurn ? 'not-allowed' : 'pointer',
              outline: 'none',
              transition: 'background 0.2s',
            }}
            disabled={!!cell || winner || !isPlayerTurn}
          >
            {cell}
          </button>
        ))}
      </div>
      <div style={{ color: '#fff', fontFamily: 'monospace', margin: '1rem 0' }}>
        {winner && <span style={{ color: winner === 'X' ? '#ffd700' : '#00eaff' }}>{winner === 'X' ? 'You win!' : 'Computer wins!'}</span>}
        {!winner && isDraw && <span style={{ color: '#00eaff' }}>Draw!</span>}
        {!winner && !isDraw && <span>{isPlayerTurn ? 'Your turn (X)' : 'Computer thinking...'}</span>}
      </div>
      <button
        onClick={handleReset}
        style={{
          fontFamily: 'Press Start 2P, monospace',
          fontSize: '1rem',
          background: '#00ff00',
          color: '#181c2b',
          border: '3px solid #ffd700',
          borderRadius: '8px',
          padding: '0.5rem 2rem',
          boxShadow: '0 0 8px #00ff00',
          cursor: 'pointer',
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default TicTacToe; 