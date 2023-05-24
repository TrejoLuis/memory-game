import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer.jsx'
import ScoreContainer from './ScoreContainer.jsx'
import { characters } from '../utils/loadCharacters.js'
import { getLocalScore, setLocalScore } from '../utils/scoreManagement.js'
import GameOptionsForm from './GameOptionsForm.jsx'

export default function Main () {
  const localBestScore = getLocalScore()

  const [data, setData] = useState(characters)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(localBestScore)

  // increase best score
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(bestScore + 1)
      setLocalScore(score)
    }
  }, [score])

  function handleClickCard (idImage) {
    setData(data.map(card => {
      if (card.id === idImage) {
        if (!card.clicked) {
          // ADD score
          increaseScore()
          return {
            ...card,
            clicked: true
          }
        } else {
          // HANDLE GAMEOVER
          console.log('GAMEOVER')
          return {
            ...card,
            clicked: false
          }
        }
      } else { return { ...card } }
    }))
  }

  function increaseScore () {
    setScore(score + 1)
  }
  return (
    <main>
      <h1>Memory Card Game</h1>
      <ScoreContainer
        score={score}
        bestScore={bestScore}
      />
      <GameOptionsForm />
      <CardContainer
        data={data}
        onClickCard={handleClickCard}
      />
    </main>
  )
}
