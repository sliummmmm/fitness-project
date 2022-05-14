import React, { useState }from 'react'
import { Menuitems } from '../utilities/Menuitem';
import { Link } from 'react-router-dom';


const NavBar = () =>{

    const [ hasSubMenu, setHasSubMenu ] = useState(false);

    const onHoverOver = (e)=>{
        e.target.style.background='Gainsboro';
    }

    const onHoverOut = (e)=>{
        e.target.style.background= null;
    }

    return (
        <div>
            <div className="ui four item menu">
                {
                    Menuitems.map((menuitem,index)=>{
                        return(
                            <>
                                <Link
                                    key={index}
                                    className="item" 
                                    onMouseOver={onHoverOver} 
                                    onMouseOut={onHoverOut}
                                    to={menuitem.url}
                                >
                                    {menuitem.title}
                                </Link>
                            </>
                        )
                    })
                }
            </div>
            <div className="ui four item menu">
                
            </div>
        </div>

    )
}


export default NavBar