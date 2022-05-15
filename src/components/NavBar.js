import React, { useState }from 'react'
import { Menuitems } from '../utilities/Menuitem';
import { Link } from 'react-router-dom';
import { Dropdown as SubMenu, Menu } from 'semantic-ui-react';


const NavBar = () =>{

    const onHoverOver = (e)=>{
        e.target.style.background='Gainsboro';
    }

    const onHoverOut = (e)=>{
        e.target.style.background= null;
    }

    console.table(Menuitems);

    return (
        <div>
            <Menu secondary vertical>
                {
                    Menuitems.map((menuitem,index)=>{
                        if (!menuitem.subMenu) {
                            return(
                                <Menu.Item
                                    key={index}
                                    onMouseOver={onHoverOver} 
                                    onMouseOut={onHoverOut}>
                                    <Link
                                        key={index}
                                        className="item" 
    
                                        to={menuitem.url}
                                    >
                                        {menuitem.title}
                                    </Link>
                                </Menu.Item>)
                        } else {
                            return(
                                <SubMenu item text={menuitem.title}>
                                    <SubMenu.Menu>
                                        {menuitem.subMenu.map((sub,index)=>{
                                            return(
                                                    <SubMenu.Item>
                                                        <Link
                                                            key={index}
                                                            className="item" 
                                                            to={sub.url}
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </SubMenu.Item>
                                            )
                                        })}
                                    </SubMenu.Menu>
    
                              </SubMenu>
                            )
                        }
                        
                    })
                }
            </Menu>
        </div>

    )
}


export default NavBar