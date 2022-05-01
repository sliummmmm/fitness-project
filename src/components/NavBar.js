import React from 'react'
import { Menuitems } from '../utilities/Menuitem';

const NavBar = (props) =>{

    const onHoverOver=(e)=>{
        e.target.style.background='Gainsboro';
    }

    const onHoverOut=(e)=>{
        e.target.style.background= null;
    }

    return (
        <div className="ui four item menu">
            {
                Menuitems.map((menuitem,index)=>{
                    return(
                        <a className="item" key={index} onMouseOver={onHoverOver} onMouseOut={onHoverOut} onClick={props.clickAction} value={menuitem.value} href={menuitem.url}>{menuitem.title}</a>
                    )
                })
            }
        </div>
    )
}


export default NavBar