import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const guessChecked = checkGuess(value, answer);
  return (
    <p className="guess">
      {value.length > 0
        ? guessChecked.map(({ letter, status }, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        : range(5).map((num) => <span key={num} className="cell"></span>)}
    </p>
  );
}

export default Guess;
