import React from 'react';

class Dropdown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            dropDownContent: this.props.dropDownContent
        };
    };

    //Done today: haven't finish the dropdown function
    componentDidMount(){
        console.log(this.state.dropDownContent);
    }

    render(){
        return(
            <div className="ui fluid search selection dropdown" >
                  <input type="hidden" name="exercise"/>
                    <i className="dropdown icon"></i>
                    <div className="default text">Select Exercise</div>
                    <div className="menu">
                {
                    this.state.dropDownContent.map(
                        (res)=>{
                            return(
                                <div className="item" data-value={res.id}>{res.name}</div>
                            )
                        }
                    )
                }
                </div>
            </div>
        );
    };
};

export default Dropdown;