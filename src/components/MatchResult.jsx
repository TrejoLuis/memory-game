import React from 'react'
import PropTypes from 'prop-types'
export default function MatchResult ({ win, score, restartGame }) {
  return (
    <div className='popup'>
      <section className='match-result'>
        <h3>You {win ? 'Won' : 'Lost'}</h3>
        <p>Score: {score}</p>
        <button onClick={restartGame}>OK</button>
      </section>
    </div>
  )
}

MatchResult.propTypes = {
  win: PropTypes.bool,
  score: PropTypes.number,
  restartGame: PropTypes.func
}
