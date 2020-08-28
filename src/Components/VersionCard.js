import React from 'react';
import Card from 'react-bootstrap/Card';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";



const VersionCard = (props) => {

  const dispatch = useDispatch();
  const pickVersion= () => dispatch({type:"PICK_VERSION", version:props.versionString});
  const updatePrice = () => dispatch({type:"UPDATE_PRICE", price:props.price});


  const handelClick = () => {
    pickVersion();
    // updatePrice()
    
    // event.target.parentNode.classList.toggle("selected")
    
  }

    return (
        <div onClick={() => handelClick()}  >
          <div className='borderBox'>
            <Card className= 'versionCard animate__animated animate__fadeIn animate__slower	3s' >
              <Card.Img variant="top" src ={props.version.initialPicture}/>
              <Card.Body>
                <Card.Text>
                  <h3>{props.version.name }</h3>
                  <span>{props.price} - Euros</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
    )
}

export default VersionCard