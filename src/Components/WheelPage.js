import React from 'react';
import Header from './Header'
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import {useSelector} from 'react-redux';



const WheelPage = (props) => {

    const versions = useSelector((state) => state.version)
    const headerTitles = useSelector((state) => state.headerTitle)
    const steps = useSelector((state)=>state.step) 
    const paths = useSelector((state)=>state.paths) 
    const prices = useSelector((state) => state.price)
    
    return (
        <div id='WheelPage'>
            <div className='main-header'>
                <Header title={headerTitles.version}/>
            </div>

            <h1>Choisir vos sièges</h1>
                <Button variant="dark" href='/DesignPage'>Previous</Button>{' '}
                <Button variant="dark" href='/EquipementPage'>Suivant</Button>{' '}

            <div className='footer'>
            <Footer 
                version={versions} 
                step={steps.color} 
                previousPath={paths[2]} 
                nextPath={paths[4]}
                previousPageName={steps.color}
                nextPageName={steps.seats}
                price={prices.legende}/>
            </div>

          </div>

    )
}

export default WheelPage;