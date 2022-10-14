import './CardDetailedList.css';

interface props {
    price: number;
    currency: string;
}


function CardDetailedList({price, currency}:props) {

    const TAX_RATE = 0.07;
    const fees = TAX_RATE * price;
    const totalPrice = price + fees;


  return (
    <div className='card_list'>
        <div className='card_row'>
             <div className='card_column'>Vehicle Price</div>
             <div className='card_column'>{currency}{price}</div>
        </div>
        <div className='card_row'>
             <div className='card_column'>Tax, Title, Registration</div>
             <div className='card_column'>{currency}{fees.toFixed(2)}</div>
        </div>
        <div className="card_row">
            <div className="card_column">SHIPPING</div>
            <div className="card_column">FREE</div>
        </div>
        <div className="card_row">
            <div className="card_column">FEES</div>
            <div className="card_column">NONE</div>
        </div>
        <div className="card_row">
            <div className="card_column">Total Cash Price</div>
            <div className="card_column">{currency}{totalPrice}</div>
        </div>
    

    </div>
  )
}

export default CardDetailedList