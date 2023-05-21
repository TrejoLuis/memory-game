import React from 'react'

export default function CardContainer ({ data, onClickCard }) {
  const cards = data.map(card =>
    <Card
      id={card.id}
      image={card.image}
      name={card.name}
      handleClick={onClickCard}
      clicked={card.clicked.toString()}
    />
  )

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

function Card ({ id, image, name, handleClick, clicked }) {
  return (
      <div className="card" key={id} onClick={() => { handleClick(id) }} isclicked={clicked}>
        <img className="card-image"
          src={image} alt={name}/>
        <p className="card-name">{name}</p>
      </div>
  )
}
