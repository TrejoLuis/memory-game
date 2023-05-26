import React from 'react'
import PropTypes from 'prop-types'
export default function ScoreContainer ({ score, bestScore }) {
  return (
    <div className="score-container">
      <p>Best score: <span>{bestScore}</span></p>
      <p>Current score: <span>{score}</span></p>
    </div>
  )
}

ScoreContainer.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number

}
