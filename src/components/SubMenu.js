import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const onHoverOver=(e)=>{
  e.target.style.background='Gainsboro';
}

const onHoverOut=(e)=>{
  e.target.style.background= null;
}

const subMenuStyle = {

}

const SubMenu = (props) => {

  console.log(props.subMenuItems);
  return (
  <div className="ui secondary vertical menu">
        {props.subMenuItems.map((item,index)=>{
          return(
            <Link
              key={index}
              onMouseOver={onHoverOver}
              onMouseOut={onHoverOut}
              to={props.subURL}
              style={subMenuStyle}
              className="item"
            >
              {item.title}
            </Link>
          )
        })}
  </div>

  )
}

export default SubMenu