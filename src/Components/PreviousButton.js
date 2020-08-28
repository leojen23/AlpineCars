import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";


const PreviousButton= (props) => {
    
    return (
        
        <div className='previousButton col-1 animate__animated animate__slideInRight'>
            <Link to={props.previousPath} >vers <span>{props.step}</span></Link>
        </div>
        
    )
}

export default PreviousButton;