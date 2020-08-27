
import Image from 'react-bootstrap/Image'
import {useDispatch, useSelector} from 'react-redux'
import {Col, Card, Row, Button } from 'react-bootstrap';
import React from 'react';




const SelectionPanel = (props) => {
    
    const colorString = useSelector((state) => state.colorPanel)
    const dispatch = useDispatch();

    const pickColor = () => dispatch({type:"PICK_COLOR", color:props.colorName});

    
    
    return (

        <button key={props.colorName} onClick={() => pickColor()}>
            <Card style={{ width: '15rem' }}>
                
                <Card.Img variant="top" src={props.colorTag} 
                />
                {/* <Card.Body>
                    
                    <Card.Text>
                    {props.colorPrice} Euros
                    </Card.Text>
                    <Button variant="primary">Choose Color</Button>
                </Card.Body> */}
            </Card>
        </button>
            

      
    )
}

export default SelectionPanel;