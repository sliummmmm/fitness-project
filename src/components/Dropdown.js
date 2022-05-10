import React, { useRef } from 'react';

const Dropdown = (props) => {

    const dropdownRef = useRef();

    const handleSelection = ()=>{
        props.onSelection(dropdownRef.current.value);
    }

    return(
        <select className="ui search dropdown" onChange={handleSelection} ref={dropdownRef} >
            <option value=''>select a exercise</option>
            {props.options.map((option,index)=>{return <option key={index} value={option.id} >{option.name}</option>})}
        </select>
    )
}

export default Dropdown;