import React, { useEffect, useState } from 'react'
import GameBoard from './GameBoard.jsx'
import ScoreBoard from './ScoreBoard.jsx'
import GameSettingsForm from './GameSettingsForm.jsx'
import { selectCharacters, shuffleArray } from '../utils/loadCharacters.js'
import { getLocalScore, setLocalScore } from '../utils/scoreManagement.js'

export default function Main () {
  const localBestScore = getLocalScore()

  const [data, setData] = useState()
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(localBestScore)
  const [started, setStarted] = useState(false)

  // TODO autoload submit on first load

  // increase best score
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(bestScore + 1)
      setLocalScore(score)
    }
  }, [score])

  function handleClickCard (idImage) {
    console.log(idImage)
    const clickedCard = data.find(card => card.id === idImage)
    if (clickedCard.clicked) {
      handleLoss()
      console.log('gameover')
    } else {
      // set true to clicked card, increasing score
      let newData = [...data]
      for (const card of newData) {
        if (card === clickedCard) { card.clicked = true }
      }
      // Check if won match
      // HANDLEVICTORY
      newData = shuffleArray(newData)
      setData(newData)
      // ADD score
      increaseScore()
    }
  }

  function increaseScore () {
    setScore(score + 1)
  }

  function handleGameSettingsSubmit (e) {
    e.preventDefault()
    const { cloth, difficult } = e.target.elements
    console.log(e.target.elements)
    setData(selectCharacters(cloth.value, difficult.value))
    setScore(0)
    setStarted(true)
  }

  function handleLoss () {
    setScore(0)
    const newData = shuffleArray(data)
    newData.forEach(char => {
      char.clicked = false
    })
    console.log(newData)
    setData(newData)
    // GAMEOVER DIALOG or POPUP
  }

  return (
    <main>
      <h1>Memory Card Game</h1>
      <ScoreBoard
        score={score}
        bestScore={bestScore}
      />
      <GameSettingsForm
        onSubmitSettings={handleGameSettingsSubmit}
      />
      {started &&
      <GameBoard
        data={data}
        onClickCard={handleClickCard}
      />
      }
    </main>
  )
}
