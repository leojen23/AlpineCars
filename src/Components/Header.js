import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/sources-homepage/logo/logo-white.png'


const Header = () => {

    return (
        
    <div>
   
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        src= {logo}
        className="d-inline-block align-top"
      />{' '}
      <span>Configurez votre Alpine</span>
    </Navbar.Brand>
  </Navbar> 

 </div >
)
}

export default Header