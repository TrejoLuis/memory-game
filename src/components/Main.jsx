import React, { useEffect, useState } from 'react'
import CardContainer from './CardContainer.jsx'
import ScoreContainer from './ScoreContainer.jsx'
import { characters } from '../loadImages.js'
import { getLocalScore, setLocalScore } from '../utils/scoreManagement.js'

// const dataIn = [
//   {
//     id: 1,
//     image: 'Image1',
//     description: 'Number1'
//   },
//   {
//     id: 2,
//     image: 'Image2',
//     description: 'Number2'
//   },
//   {
//     id: 3,
//     image: 'Image3',
//     description: 'Number3'
//   },
//   {
//     id: 4,
//     image: 'Image4',
//     description: 'Number4'
//   }
// ]

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
      <CardContainer
        data={data}
        onClickCard={handleClickCard}
      />
    </main>
  )
}
