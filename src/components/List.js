import React, { useEffect, useState } from 'react';
import Button from './Button';

export const List = (props) => {
    const { listItems, removeAction } = props

    return (
        <div className="ui list" style={{margin:'20px'}}>
            {listItems.length === 0 && <div>Your list is empty</div>}
            { listItems.map((item,index)=>{
                return(
                <div className="item" key={index}>
                    <img className="ui avatar image" src={item.exerciseImg} style={{width:'80px', height:'80px'}} alt={item.exercisename}/>
                    <div className="content">
                        <div className="header">{item.exercisename}</div>
                        <div className="description">{item.exerciseRep} X {item.groupNumber}</div>
                        <div>
                        <Button
                            buttonType="ui red button"
                            buttonText="Delete"
                            buttonAction={()=>removeAction(item)}
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