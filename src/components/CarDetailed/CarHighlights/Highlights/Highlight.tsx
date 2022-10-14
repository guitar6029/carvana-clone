import React from 'react'
import './Highlight.css';

interface props {
    highlight: string;
}

function Highlight({highlight}: props) {
  return (
    <div className='highlight'>
        <h3 className=' main_text_color transition_effect'>{highlight}</h3>
    </div>
      
  ) 
}

export default Highlight