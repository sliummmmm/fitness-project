import React from 'react'
import { Menuitems } from '../utilities/Menuitem';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';

const NavBar = () =>{

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
                        <Link
                            key={index} 
                            className="item" 
                            onMouseOver={onHoverOver} 
                            onMouseOut={onHoverOut} 
                            to={menuitem.url}
                        >
                            {menuitem.title}
                            {menuitem.subMenu&&

                            <SubMenu
                                subMenuItems={menuitem.subMenu}
                                onMouseOver={onHoverOver} 
                                onMouseOut={onHoverOut} 
                            />
                            }
                        </Link>
                    )
                })
            }
        </div>
    )
}


export default NavBar