import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer.jsx'
import ScoreContainer from './ScoreContainer.jsx'
import GameSettingsForm from './GameOptionsForm.jsx'
import { selectCharacters } from '../utils/loadCharacters.js'
import { getLocalScore, setLocalScore } from '../utils/scoreManagement.js'

export default function Main () {
  const localBestScore = getLocalScore()

  const [data, setData] = useState()
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(localBestScore)
  const [started, setStarted] = useState(false)
  const [gameSettings, setGameSettings] = useState()

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

  function handleGameSettingsSubmit (e) {
    e.preventDefault()
    const { cloth, difficult } = e.target.elements
    console.log(e.target.elements)
    setGameSettings({
      cloth: e.target.elements.cloth.value,
      difficult: e.target.elements.difficult.value
    })
    setData(selectCharacters(cloth.value, difficult.value))
    setScore(0)
    setStarted(true)
  }

  return (
    <main>
      <h1>Memory Card Game</h1>
      <ScoreContainer
        score={score}
        bestScore={bestScore}
      />
      <GameSettingsForm
        onSubmitSettings={handleGameSettingsSubmit}
      />
      {started &&
      <CardContainer
        data={data}
        onClickCard={handleClickCard}
      />
      }
    </main>
  )
}
