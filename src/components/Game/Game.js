import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameResult, setGameResult] = useState('ongoing');

  function recordGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (guess === answer) {
      setGameResult('won');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput recordGuess={recordGuess} gameResult={gameResult} />
      {gameResult !== 'ongoing' && <Banner gameResult={gameResult} numOfTries={guesses.length} answer={answer} />}
    </>
  );
}

export default Game;
