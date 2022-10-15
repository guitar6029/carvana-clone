import React from 'react'
import { Owner } from '../../Owner';
import {BsDot} from 'react-icons/bs';
import './OwnerReview.css';
interface props {
    owner : Owner;
}

function OwnerReview({owner}:props) {
  return (
    <div className='owner_card'>
        <h3 className='owner_name'> <i>{owner.name}</i> from {owner.location}</h3>
        {(owner.verifiedDate) && <span className='owner_verified'>Verified Owneer <BsDot/> {owner.verifiedDate} </span>}
        <q className='owner_comment'>{owner.comment}</q>
        </div>
  )
}

export default OwnerReview