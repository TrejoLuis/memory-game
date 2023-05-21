import React from 'react'
export default function ScoreContainer ({ current, best }) {
  return (
    <div className="score-container">
      <p>Best score: <span>{best}</span></p>
      <p>Current score: <span>{current}</span></p>
    </div>
  )
}
