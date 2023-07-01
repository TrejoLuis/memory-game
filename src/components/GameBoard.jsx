import React from 'react'
import PropTypes from 'prop-types'

export default function GameBoard ({ data, onClickCard }) {
  const cards = data.map(card =>
    <Card
      id={card.id}
      key={card.id}
      image={card.image}
      name={card.name}
      handleClick={onClickCard}
      clicked={card.clicked.toString()}
    />
  )

  return (
    <section className="game-board">
      {cards}
    </section>
  )
}

function Card ({ id, image, name, handleClick, clicked }) {
  return (
      <article className="card" onClick={() => { handleClick(id) }} isclicked={clicked}>
        <img className="card-image"
          src={image} alt={name}/>
        <p className="card-name">{name}</p>
      </article>
  )
}

GameBoard.propTypes = {
  data: PropTypes.array,
  onClickCard: PropTypes.func
}

Card.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  clicked: PropTypes.string
}
