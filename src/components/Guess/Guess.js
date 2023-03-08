import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {value.length > 0
        ? Array.from(value).map((character, index) => (
            <span key={index} className="cell">
              {character}
            </span>
          ))
        : range(5).map((num) => <span key={num} className="cell"></span>)}
    </p>
  );
}

export default Guess;
