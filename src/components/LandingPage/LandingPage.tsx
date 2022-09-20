import React from 'react'
import LandingPageSearch from '../LandingPageSearch/LandingPageSearch';
import MainNav from '../MainNav/MainNav';
import './LandingPage.css';

const LandingPage : React.FC = () => {
  return (
    <div className='landing'>
        <MainNav />
         <LandingPageSearch />
        {/* <img src="images/erik-mclean-ZRns2R5azu0-unsplash.jpg" alt="" />     */}
    </div>
  )
}

export default LandingPage