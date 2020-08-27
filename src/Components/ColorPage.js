import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import SelectionPanel from './SelectionPanel';
import {useSelector}  from 'react-redux';
import Footer from './Footer';
import {Col, Card, Row, Button } from 'react-bootstrap';
import Carouselo from './Carousel';
// import NextButton from './Components/NextButton';


const ColorPage = () => {

    const colors = useSelector((state) => state.colorPanel)
    const headerTitles = useSelector((state) => state.headerTitle)
    const versions = useSelector((state) => state.version)
    const steps = useSelector((state)=>state.step) 
    const paths = useSelector((state)=>state.path) 
    const carouselImages = useSelector((state)=>state.carouselImage)
    // console.log(colors.black)


    // const images = {
    //     1: versions.legende.allPictures.white.backSide,
    //     2: versions.legende.allPictures.white.frontSide,
    //     3: versions.legende.allPictures.white.leftSide,
    //     4: versions.legende.allPictures.white.rightSide,
    // }

    // const test = (images) => {
    //     images.forEach(image => console.log(image))
    // }
    // test()
        
    

    const displayColorSelectionCards = () => {
        
        return Object.keys(colors).map(key => 
            // return console.log(colors[key].key)
        
        (
            
                <Col>
                    <SelectionPanel key={colors[key].key} colorName={colors[key].key} colorTag = {colors[key].colorTag} colorDescription ={colors[key].color} colorPrice={colors[key].price}/>
                </Col>
        ));
      }
    
    return (
        <div id='ColorPage wrapper'>

            
                <Header title={headerTitles.color}/>
            

            <div id='DesignCarousel'>
               
            </div>
            
            <Row className='DesignCarousel'>

            </Row>
            <Carouselo version={versions} carouselImages = {carouselImages} />
            
            <Row className='SelectionPanel'>
                {displayColorSelectionCards()}
            </Row>

           
            <Button variant="dark" href='/VersionPage'>Previous</Button>{' '}
            <Button variant="dark" href='/SelleriePage'>Suivant</Button>{' '}

                


            <div className='footer'>
                <Footer version={versions} step={steps.color} path={paths.color}/>
            </div>
        </div>
        
    )
}

export default ColorPage;
            
          
