import React from 'react';


const NextButton = (props) => {
    
    return (
        
        <div className='stepDiv col-5 animate__animated animate__slideInRight'>
            <a href='/ColorPage'> A suivre : 
                <span>{props.step}</span>
            </a>
        </div>
        
    )
}

export default NextButton;