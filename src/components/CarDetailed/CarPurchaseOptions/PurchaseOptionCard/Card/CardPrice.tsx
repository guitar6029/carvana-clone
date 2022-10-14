import React from 'react'

interface props {
    price: number;
    currency: string;
}

function CardPrice({price, currency}: props) {
  return (
    <h3 className='card_price'>{currency}{price}</h3>
  )
}

export default CardPrice