import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/sources-homepage/logo/logo-white.png';


const Header = (props) => {

    return (
        
      <Navbar variant="dark" className='main-header'>
        <div className='col-8 '>
          <Navbar.Brand href="/versionPage">
            <img
              src= {logo}
              className="d-inline-block align-top animate__animated animate__slideInLeft "
            />{' '}
          </Navbar.Brand>
          <span className='animate__animated animate__fadeIn animate__slower	3s'>|</span>
          <span className='animate__animated animate__fadeIn animate__slower	3s'>{props.title}</span>
          <span className='animate__animated animate__fadeIn animate__slower	3s'>|</span>
        </div>

        <div className='col-4 recapShortcut'>
         <a href='./RecapPage'> <span>RECAPITULATIF</span></a>
        </div>
      </Navbar> 
    )
  }

export default Header