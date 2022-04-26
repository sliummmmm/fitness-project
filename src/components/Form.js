import React from "react";
import Button from "./Button";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    };

    render(){
        return(
            <div>
                <div className="ui form" style={{width:"80%", margin:"20px"}}>
                    <div className="field">
                        <label>Content</label>
                        <textarea 
                            onChange={this.props.inputContentAction}
                            value={this.props.inputContentValue}
                        >
                        </textarea>
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <textarea 
                            rows="2" 
                            onChange={this.props.inputTitleAction}
                            value={this.props.inputTitleValue}
                        >
                        </textarea>
                    </div>
                    <Button 
                        buttonType="ui primary button" 
                        buttonText="Submit"
                        buttonAction={this.props.submitAction}
                    />
                </div>
            </div>
        );
    }
}

export default Form;