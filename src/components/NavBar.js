import React from 'react'
import { Menuitems } from '../utilities/Menuitem';

class NavBar extends React.Component {
    onHoverOver(e){
        e.target.style.background='Gainsboro';
    }

    onHoverOut(e){
        e.target.style.background= null;
    }

    render() {
        return (
            <div className="ui four item menu">
                {
                    Menuitems.map((menuitem,index)=>{
                        return(
                            <a className="item" key={index} onMouseOver={this.onHoverOver} onMouseOut={this.onHoverOut} onClick={this.props.clickAction} value={menuitem.value} href={menuitem.url}>{menuitem.title}</a>
                        )
                    })
                }
            </div>
        )
    }
}

export default NavBar