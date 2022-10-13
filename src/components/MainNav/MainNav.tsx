import React from 'react'
import { AiOutlineCar } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import './MainNav.css';

function MainNav() {
  return (
    <nav className='main_nav'>
        <div className='brand'><Link to='/'><AiOutlineCar/>Carvana</Link></div>
        <div><Link to='/cars'>Search Cars</Link></div>
        
    </nav>
  )
}

export default MainNav