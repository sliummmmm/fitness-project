import React from 'react'
import { Link } from 'react-router-dom'


export const SubMenu = (props) => {
  return (
  <div className="ui four item menu">
        {/* {props.subMenuItems.map((item,index)=>{
          return(
            <Link
              onMouseOver={props.onMouseOver} 
              onMouseOut={props.onMouseOut} 
            >
            </Link>
          )
        })} */}
  </div>

  )
}

export default SubMenu