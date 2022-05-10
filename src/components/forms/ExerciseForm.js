import React from 'react';
import Dropdown from '../Dropdown';
import InputArea from '../InputArea';
import Button from '../Button';

class ExerciseForm extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className='exerciseSection'>
          <div style={{width:'100%'}}>
            <Dropdown
              options={this.props.dataList}
              onSelection={this.props.onChoose}
            />
            <div className='inputSection' style={{margin:'10px'}}>
              <InputArea
                placeHolder="rep(s)"
                inputRef={this.props.rep}
                inputType="text" 
              />
              <span><i className='x icon'></i></span>
              <InputArea
                placeHolder="group(s)"
                inputRef={this.props.group}
                inputType="text" 
              />
            </div>
            <Button
              buttonType="ui primary button"
              buttonText="Add"
              buttonAction={this.props.onAdd}
            />
          </div>
        </div>
    );
  }
}

export default ExerciseForm;