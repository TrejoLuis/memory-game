import React, { useState } from 'react'
import CardContainer from './CardContainer'
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
  return (
    <main>
      <h1>Memory Card Game</h1>
      <div className="score-container"></div>
      <CardContainer
        data={data}
      />
    </main>
  )
}
