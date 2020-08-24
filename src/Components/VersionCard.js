import React from 'react';
import test from '../images/configurateur/modele/selection/legende.png';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';

const VersionCard = (props) => {
const cars = useSelector((state)=>state.cars) 
/* console.log */
    return (
        
    <div>
           <Card className="versionCard">
             <Card.Img variant="top" src={test} />
             <Card.Body>
               <Card.Text>
                 Name : {cars[1].version } 
                 {/* Price : {.cars.price} */}
               </Card.Text>
             </Card.Body>
           </Card>
           </div>
    )
}
export default VersionCard