import React, { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];
const icons = {
  Rock: '✊',
  Paper: '✋',
  Scissors: '✌️',
};

function getResult(player, computer) {
  if (player === computer) return 'Draw!';
  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
    return 'You Win!';
  }
  return 'You Lose!';
}

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  function handlePlay(choice) {
    const comp = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(comp);
    setResult(getResult(choice, comp));
  }

  function handleReset() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
  }

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h3 style={{ fontFamily: 'Press Start 2P, monospace', color: '#00ff00', textShadow: '0 0 5px #00ff00' }}>Rock Paper Scissors</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1.5rem 0' }}>
        {choices.map(choice => (
          <button
            key={choice}
            onClick={() => handlePlay(choice)}
            disabled={!!playerChoice}
            style={{
              fontFamily: 'Press Start 2P, monospace',
              fontSize: '1.5rem',
              background: '#181c2b',
              color: '#ffd700',
              border: '3px solid #00ff00',
              borderRadius: 8,
              boxShadow: '0 0 8px #00ff00',
              padding: '1rem 2rem',
              cursor: playerChoice ? 'not-allowed' : 'pointer',
              outline: 'none',
              transition: 'background 0.2s',
            }}
          >
            {icons[choice]}<br />{choice}
          </button>
        ))}
      </div>
      {playerChoice && (
        <div style={{ color: '#fff', fontFamily: 'monospace', margin: '1rem 0' }}>
          <div>You: <span style={{ color: '#ffd700', fontSize: '1.2rem' }}>{icons[playerChoice]}</span></div>
          <div>Computer: <span style={{ color: '#00eaff', fontSize: '1.2rem' }}>{icons[computerChoice]}</span></div>
          <div style={{ marginTop: '1rem', fontWeight: 'bold', color: result === 'You Win!' ? '#00ff00' : result === 'You Lose!' ? '#c62828' : '#ffd700' }}>{result}</div>
        </div>
      )}
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

export default RockPaperScissors; 