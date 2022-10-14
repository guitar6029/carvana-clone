import React from 'react'

interface props {
    title : string;
}

function CardTitle({title}:props) {
  return (
    <h3 className='card_title'>{title}</h3>
  )
}

export default CardTitle