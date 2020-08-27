import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import {useSelector}  from 'react-redux';

const RecapPage = (props) => {
    
    const headerTitles = useSelector((state) => state.headerTitle)

    return (
        <div id='RecapPage'>
            <Header title={headerTitles.recap}/>

                <Button variant="dark" href='/SelleriePage'>Previous</Button>{' '}
                <Button variant="dark" href='/AccessoiresPage'>Suivant</Button>{' '}
          </div>
    )
}

export default RecapPage;