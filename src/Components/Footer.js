import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const Footer = (props) =>{
    console.log(props.price)

    return(
        <div className='container-fluid'>
            <div className="row footer">
                <PreviousButton  version={props.version} step={props.step} previousPath={props.previousPath}/>

                <div className = "stepSelected col-5 animate__animated animate__fadeIn animate__slower	3s'">
                    <h5 >Modèle selectionné : <small>{props.price} €</small></h5>
                    {/* <p className='animate__animated animate__flash animate__repeat-1	1animate__slower	3s'>à partir de {props.version.legende.initialPrice} €</p> */}
                </div>

                <NextButton   version={props.version} step={props.step} nextPath={props.nextPath}/>
        
            </div>
        </div>

    )
}

export default Footer;