import React from 'react';

class InputArea extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div className="ui input">
                <input 
                    type="text" 
                    placeholder={this.props.placeHolder}
                    onChange={this.props.inputAction}
                    value={this.props.inputContentValue}/>
            </div>
        );
    };
};

export default InputArea;