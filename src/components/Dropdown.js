import React from 'react';

const Dropdown = (props) => {

    const handleSelection = (e)=>{
        this.props.onSelection(e.target.value);
    }

    return(
        < select className="ui search dropdown" onChange={handleSelection} >
            <option value=''>select a exercise</option>
            {props.options.map((option,index)=>{return <option key={index} value={option.id} >{option.name}</option>})}
        </select>
    )
}

export default Dropdown;