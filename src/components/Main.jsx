import React, { useState } from 'react'
import CardContainer from './CardContainer.jsx'
import ScoreContainer from './ScoreContainer.jsx'
import { characters } from '../loadImages.js'

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
  const [data, setData] = useState(characters)
  const [score, setScore] = useState({
    current: 0,
    best: 0
  })

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
    setScore({
      current: score.current + 1,
      best: score.best < score.current + 1
        ? score.current + 1
        : score.best
    })
  }
  return (
    <main>
      <h1>Memory Card Game</h1>
      <ScoreContainer
        best={score.best}
        current={score.current}
      />
      <CardContainer
        data={data}
        onClickCard={handleClickCard}
      />
    </main>
  )
}
