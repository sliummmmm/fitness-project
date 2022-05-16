import React from 'react';
import Dropdown from '../Dropdown';
import InputArea from '../InputArea';
import Button from '../Button';

const ExerciseForm = (props)=>{
  return(
    <div className='exerciseSection'>
      <div style={{width:'100%'}}>
        <Dropdown
          options={props.dataList}
          onSelection={props.onChoose}
        />
        <div className='inputSection' style={{margin:'10px'}}>
          <InputArea
            placeHolder="rep(s)"
            inputRef={props.rep}
            inputType="text" 
          />
          <span><i className='x icon'></i></span>
          <InputArea
            placeHolder="group(s)"
            inputRef={props.group}
            inputType="text" 
          />
        </div>
        <Button
          buttonType="ui primary button"
          buttonText="Add"
          buttonAction={props.onAdd}
        />
      </div>
    </div>
);
}

export default ExerciseForm;