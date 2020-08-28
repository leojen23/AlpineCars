import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';



const LandingPage = (props) => {
    
    return (
        <div id='LandingPage' className='landingPage container-fluid' >
            
            <h1 className= 'animate__animated animate__fadeIn animate__slower	3s'>Alpine</h1>
                <Button  size="lg" className= 'animate__animated animate__fadeIn animate__slower	3s' variant="outline-light" href='./VersionPage'>Configurez votre Alpine</Button>{' '}
          </div>
        
    )
}

export default LandingPage;