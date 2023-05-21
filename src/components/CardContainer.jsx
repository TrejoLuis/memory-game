import React from 'react'

export default function CardContainer ({ data }) {
  console.log(data)

  const cards = data.map(card => 
    <Card 
      id={card.id}
      image={card.image}
      description={card.description}
    />   
  )

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

function Card ({ id, image, description }) {
  return (
      <div className="card" key={id}>
        <div className="card-image">{image}</div>
        <p className="card-description">{description}</p>
      </div>
  )
}
