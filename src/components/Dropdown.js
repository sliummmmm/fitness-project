import React from 'react';

class Dropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    };

    render(){
        return(
            <select className="ui search dropdown" onClick={this.props.dropDownAction}>
            </select>
        );
    };
};

export default Dropdown;