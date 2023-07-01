import React from 'react'
import PropTypes from 'prop-types'
export default function ScoreContainer ({ score, bestScore }) {
  return (
    <section className="score-container">
      <p>Best score: <span>{bestScore}</span></p>
      <p>Current score: <span>{score}</span></p>
    </section>
  )
}

ScoreContainer.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number

}
