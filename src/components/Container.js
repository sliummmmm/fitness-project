import React from 'react';

class Container extends React.Component{
    constructor(props){
        super(props);

        this.state={
            
        };
    };

    
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    };
};

export default Container;