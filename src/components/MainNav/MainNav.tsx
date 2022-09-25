import React from 'react'
import {Link} from 'react-router-dom';
import './MainNav.css';

function MainNav() {
  return (
    <nav className='main_nav'>
        <div><Link to='/'>Carvana</Link></div>
        <div><Link to='/cars'>Search Cars</Link></div>
        <div><Link to='/sell-my-car'>Sell / Trade </Link></div>
    </nav>
  )
}

export default MainNav