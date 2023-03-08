import React, { useState } from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer }) {
  let guessResults = [...guesses];
  for (let index = 0; index < NUM_OF_GUESSES_ALLOWED - guesses.length; index++) {
    guessResults.push('');
  }
  return (
    <div className="guess-results">
      {guessResults.map((guess, index) => (
        <Guess key={index} value={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
