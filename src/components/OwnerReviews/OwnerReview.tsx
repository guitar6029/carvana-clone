import React from 'react'
import { Owner } from '../../Owner';
import {BsDot} from 'react-icons/bs';
interface props {
    owner : Owner;
}

function OwnerReview({owner}:props) {
  return (
    <div>
        <h3 className='owner_name'><b>{owner.name}</b>from {owner.location}</h3>
        {(owner.verifiedDate) && <span className='owner_verified'>Verified Owneer <BsDot/> {owner.verifiedDate} </span>}
        <span className='owner_comment'>{owner.comment}</span>
        </div>
  )
}

export default OwnerReview