import React from "react";
import Button from "./Button";

const Form = (props) => {
    return(
        <div>
            <div className="ui form" style={{width:"50%", margin:"20px"}}>
                <div>
                   From User: {props.userID}
                </div>
                <br/>
                <div className="field">
                    <label>Title</label>
                    <textarea 
                        rows="2" 
                        onChange={props.inputTitleAction}
                        value={props.inputTitleValue}
                        ref={props.inputTitleRef}
                    >
                    </textarea>
                </div>
                <div className="field">
                    <label>Content</label>
                    <textarea 
                        onChange={props.inputContentAction}
                        value={props.inputContentValue}
                        ref={props.inputContentRef}
                    >
                    </textarea>
                </div>
                <Button 
                    buttonType="ui primary button" 
                    buttonText="Submit"
                    buttonAction={props.submitAction}
                />
            </div>
        </div>
    )
}


export default Form;