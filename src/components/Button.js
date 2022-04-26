import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    };

    render(){
        return(
            <button 
                className={this.props.buttonType} 
                style={{margin:"10px"}}
                onClick={this.props.buttonAction}
            >
                {this.props.buttonText}
            </button>
        );
    };
    
};

export default Button;