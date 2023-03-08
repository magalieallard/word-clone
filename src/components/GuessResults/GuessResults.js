import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  let guessResults = [...guesses];
  for (let index = 0; index < NUM_OF_GUESSES_ALLOWED - guesses.length; index++) {
    guessResults.push('');
  }
  return (
    <div className="guess-results">
      {guessResults.map((guess, index) => (
        <Guess key={index} value={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
