import React from 'react';
import Button from './Button';

export const List = (props) => {

    return (
        <div className="ui list" style={{margin:'20px'}}>
            {!props.listItem && <div>No exercise is slected</div>}
            {props.listItems.map((item,index)=>{
                return(
                <div className="item" key={index}>
                    <img className="ui avatar image" src={item.exerciseImg} style={{width:'80px', height:'80px'}} alt={item.exercisename}/>
                    <div className="content">
                        <div className="header">{item.exercisename}</div>
                        <div className="description">{item.exerciseRep} Rep(s) for {item.groupNumber} Group(s)</div>
                        <div>
                        <Button
                            buttonType="ui red button"
                            buttonText="Delete"
                            buttonAction={()=>props.removeAction(item)}
                        />
                    </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default List;