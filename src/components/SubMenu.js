import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const onHoverOver=(e)=>{
  e.target.style.background='Gainsboro';
}

const onHoverOut=(e)=>{
  e.target.style.background= null;
}

const SubMenu = (props) => {

  const [ subMenuItems, setSubMenuItems ] = useState([]);

  // useEffect(()=>{
  //   props.subMenuItems
  // },[])

  console.log(props.subMenuItems);
  return (
  <div className="ui secondary vertical menu">
        {props.subMenuItems.map((item,index)=>{
          return(
            <Link
              onMouseOver={onHoverOver}
              onMouseOut={onHoverOut}
              to={props.subURL}

              class="item"
            >
              {item.title}
            </Link>
          )
        })}
  </div>

  )
}

export default SubMenu