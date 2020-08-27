import React from 'react';
import NextButton from './NextButton';

const Footer = (props) =>{

    return(
        <div className='container-fluid'>
            <div className="row footer">

                <div className = "stepSelected col-7 animate__animated animate__fadeIn animate__slower	3s'">
                    <h5 >Modèle selectionné : <small>{props.version.legende.initialPrice} €</small></h5>
                    {/* <p className='animate__animated animate__flash animate__repeat-1	1animate__slower	3s'>à partir de {props.version.legende.initialPrice} €</p> */}
                </div>
            
                <NextButton   version={props.version} step={props.step} path={props.path}/>
            
            
            </div>
        </div>

    )
}

export default Footer;