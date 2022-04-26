import React from "react";
import ReactDOM from 'react-dom';

class Profileview extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    };

    render(){
        return(
            <div className="ui card">
                <div className="image">
                <img src="/images/avatar2/large/kristy.png"/>
                </div>
                <div className="content">
                    <a className="header">#User</a>
                <div className="meta">
                    <span className="date">#Start date</span>
                </div>
                <div className="description">
                    #Description
                </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        #Target
                    </a>
                </div>
            </div>
        );
    }
};

export default Profileview;