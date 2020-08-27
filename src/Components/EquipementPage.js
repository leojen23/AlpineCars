import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';


const EquipementPage = (props) => {
    
    return (
        <div id='EquipementPage'>
            <Header />

        <h1>Choisir vos équipements</h1>
            <Button variant="dark" href='/SelleriePage'>Previous</Button>{' '}
            <Button variant="dark" href='/AccessoiresPage'>Suivant</Button>{' '}
        </div>
    )
}

export default EquipementPage;