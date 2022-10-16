import React from 'react'
import Button from '../../../Button/Button';
import CardDetailedList from './Card/CardDetailedList';
import CardPrice from './Card/CardPrice';
import CardTitle from './Card/CardTitle';

interface props {
  price: number;
  title: string;
  currency : string;
  addList : boolean;
}




function PurchaseOptionCard({price, title, currency, addList}: props) {
  
 
  return (
    <div className='container_main card_default_height'>
        <CardTitle title={title} />
        <CardPrice price={price} currency="$"/>
        {(addList) && <CardDetailedList price={price} currency={currency}  />}
        <Button title="Start your Purchase" />
    </div>
  )
}


export default PurchaseOptionCard