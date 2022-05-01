import React from 'react';
import { useRef } from 'react'

const InputArea = (props) => {

    return(
        <div className="ui input">
            <input 
                type={props.inputType}
                placeholder={props.placeHolder}
                onChange={props.inputAction}
                value={props.inputContentValue}
                ref={props.inputRef}
                />

        </div>
    )
}



export default InputArea;