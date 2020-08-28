import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";
import { NavLink } from 'react-bootstrap';

const NextButton = (props) => {
    
    return (
        
        <div className='stepDiv col-5 animate__animated animate__slideInRight'>
            <Link to={props.nextPath} >Prochaine étape : <span>{props.nextPageName}</span></Link>
        </div>
    )
}

export default NextButton;