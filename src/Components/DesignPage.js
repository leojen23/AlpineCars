import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import SelectionPanel from './SelectionPanel';
import {useSelector}  from 'react-redux';
import Footer from './Footer';
import {Col, Card, Row, Button } from 'react-bootstrap';
// import NextButton from './Components/NextButton';


const DesignPage = () => {

    const colors = useSelector((state) => state.colorPanel)
    const headerTitles = useSelector((state) => state.headerTitle)
    const versions = useSelector((state) => state.version)
    const steps = useSelector((state)=>state.step) 
    // console.log(colors.black)

    const displayColorSelectionCards = () => {
        
        return Object.keys(colors).map(key => (
                <Col>
                    <SelectionPanel key={colors[key].id} colorTag = {colors[key].colorTag} colorDescription ={colors[key].color} colorPrice={colors[key].price}/>
                </Col>
            
        ));
      }
    
    return (
        <div id='DesignPage wrapper'>

            <div className='main-header'>
            <Header title={headerTitles.color}/>
            </div>

            <div id='DesignCarousel'>
               
            </div>
            
            



            <Row className='DesignCarousel'>

            </Row>

            
           
            
            <Row className='SelectionPanel'>
                {displayColorSelectionCards()}
            </Row>

           
            <Button variant="dark" href='/VersionPage'>Previous</Button>{' '}
            <Button variant="dark" href='/SelleriePage'>Suivant</Button>{' '}

            <div className='footer'>
            <Footer version={versions} step={steps}/>
            </div>
        </div>
        
    )
}

export default DesignPage;