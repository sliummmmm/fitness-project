import React, { useState }from 'react'
import { Menuitems } from '../utilities/Menuitem';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';

const NavBar = () =>{

    const [ subToggler, setSubToggler ] = useState(false);
    cosnt [ subMenuItem, setSubMenuItem ] = useState();

    const onHoverOver = (e)=>{
        e.target.style.background='Gainsboro';
    }

    const onHoverOut = (e)=>{
        e.target.style.background= null;
    }

    const onToggleSub = ()=>{
        setSubToggler(!subToggler);
        console.log(subToggler);
    }

    return (
        <div className="ui four item menu">
            {
                Menuitems.map((menuitem,index)=>{
                    console.log(menuitem);
                    return(
                        <>
                            <Link
                                key={index} 
                                className="item" 
                                onMouseOver={onHoverOver} 
                                onMouseOut={onHoverOut}
                                onClick={onToggleSub}
                                to={menuitem.url}
                            >
                                {menuitem.title}
                            </Link>
                            { menuitem.subMenu && <SubMenu subMenuItems={menuitem.subMenu}/>}
                        </>
                    )
                })
            }
        </div>
    )
}


export default NavBar