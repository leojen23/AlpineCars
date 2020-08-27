import React from 'react';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel';
import {useSelector}  from 'react-redux';

const Carouselo = (props) => {
    
    const displayCarousel = () => {
        
        return Object.keys(props.carouselImages).map(key => {
            
           return (
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {props.carouselImages[key]}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
             </Carousel.Item>
        
        )})
    };
    
    
    
    

    return (
        <div >
            <Carousel>
                {displayCarousel()}
            </Carousel>
               
        </div>
    )

}

export default Carouselo;