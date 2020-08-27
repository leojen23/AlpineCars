import React from 'react';
import Card from 'react-bootstrap/Card';


const VersionCard = (props) => {

    return (
        
        <Card className= 'versionCard animate__animated animate__fadeIn animate__slower	3s' >
          <Card.Img variant="top" src ={props.version.initialPicture}/>
          <Card.Body>
            <Card.Text>
              <h3>{props.version.name } </h3>
              <span>{props.version.initialPrice } - Euros</span>
            </Card.Text>
          </Card.Body>
        </Card>
      
    )
}

export default VersionCard