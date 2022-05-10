import React from 'react';

const Button = (props) => {

    return(
        <button 
            className={props.buttonType} 
            style={{margin:"10px"}}
            onClick={props.buttonAction}
            disabled={props.loadingCondition}
        >
            {props.buttonText}
        </button>
    )
}

export default Button;