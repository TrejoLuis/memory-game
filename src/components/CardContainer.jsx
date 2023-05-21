import React from 'react'

export default function CardContainer ({ data }) {
  console.log(data)

  const cards = data.map(card =>
    <Card
      id={card.id}
      image={card.image}
      name={card.name}
    />
  )

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

function Card ({ id, image, name }) {
  return (
      <div className="card" key={id}>
        <img className="card-image"
          src={image} alt={name}/>
        <p className="card-name">{name}</p>
      </div>
  )
}
