import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';


const SelleriePage = (props) => {
    
    return (
        <div id='SelleriePage'>
            <Header />

            <h1>Choisir vos sièges</h1>
                <Button variant="dark" href='/ColorPage'>Previous</Button>{' '}
                <Button variant="dark" href='/EquipementPage'>Suivant</Button>{' '}
          </div>
    )
}

export default SelleriePage;