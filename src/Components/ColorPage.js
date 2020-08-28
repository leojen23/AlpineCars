import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import SelectionPanel from './SelectionPanel';
import {useSelector}  from 'react-redux';
import Footer from './Footer';
import {Col, Card, Row, Button } from 'react-bootstrap';
import Carouselo from './Carousel';



const ColorPage = () => {

    const colors = useSelector((state) => state.colorPanel)
    const headerTitles = useSelector((state) => state.headerTitle)
    const versions = useSelector((state) => state.version)
    const steps = useSelector((state)=>state.step) 
    const paths = useSelector((state)=>state.paths) 
    const carouselImages = useSelector((state)=>state.carouselImage)
  

    const displayColorSelectionCards = () => {
        
        return Object.keys(colors).map(key => 
        (
            <Col>
                <SelectionPanel key={colors[key].key} colorName={colors[key].key} colorTag = {colors[key].colorTag} colorDescription ={colors[key].color} colorPrice={colors[key].price}/>
            </Col>
        ));
      }
    
    return (
        <div id='ColorPage wrapper' className='colorPage'>
            
            <Header title={headerTitles.color}/>
            
            <div id='DesignCarousel' className=''>
                <Carouselo version={versions} carouselImages = {carouselImages} />
            </div>
            
            {/* <Row className='DesignCarousel'>

            </Row> */}
            
            
            <Row className='SelectionPanel'>
                {displayColorSelectionCards()}
            </Row>

            <div className='footer'>
                <Footer version={versions} step={steps.color} previousPath={paths[1]} nextPath={paths[3]}/>
            </div>

        </div>
        
    )
}

export default ColorPage;
            
          
