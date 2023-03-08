import React from 'react';

function Banner({ gameResult, numOfTries, answer }) {
  return gameResult === 'won' ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numOfTries === 1 ? '1 guess' : `${numOfTries} guesses`}</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
