import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';


const AccessoiresPage = (props) => {
    
    return (
        <div id='AccessoiresPage'>
            <Header />

            <h1>Choisir vos accessoires</h1>
                <Button variant="dark" href='/EquipementPage'>Previous</Button>{' '}
                <Button variant="dark" href='/RecapPage'>Récapitulatif</Button>{' '}
          </div>
        
    )
}

export default AccessoiresPage;