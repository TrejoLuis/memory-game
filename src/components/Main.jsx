import React, { useEffect, useState, useRef } from 'react'
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
  const settingsForm = useRef()

  // TODO autoload submit on first load
  useEffect(() => {
    settingsForm.current.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    )
  }, [])

  // increase best score
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(bestScore + 1)
      setLocalScore(score)
    }
  }, [score])

  function handleClickCard (idImage) {
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
      newData = shuffleArray(newData)
      setData(newData)
      // ADD score
      increaseScore()

      // Check winner
      if (!newData.some(card => !card.clicked)) {
        // HANDLEVICTORY
        alert("You've Won")
        // Automatic restart
        settingsForm.current.dispatchEvent(
          new Event('submit', { bubbles: true, cancelable: true })
        )
        // settingsForm.current
      }
    }
  }

  function increaseScore () {
    setScore(score + 1)
  }

  function handleGameSettingsSubmit (e) {
    e.preventDefault()
    const { cloth, difficult } = e.target.elements
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
    setData(newData)
    // GAMEOVER DIALOG or POPUP
    alert("You've Lost")
  }

  return (
    <main>
      <ScoreBoard
        score={score}
        bestScore={bestScore}
      />
      <GameSettingsForm
        onSubmitSettings={handleGameSettingsSubmit}
        formRef={settingsForm}
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
