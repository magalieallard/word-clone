import React, { useState } from 'react';

function GuessInput({ recordGuess, gameResult, numOfTries, answer }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    recordGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        disabled={gameResult !== 'ongoing'}
      />
    </form>
  );
}

export default GuessInput;
