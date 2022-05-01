import React, { useState, useEffect } from 'react';
import faker from '@faker-js/faker';

export const Profilecard = (props) => {

  return (
    <div className="ui card">
    <div className="image">
    <img src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/754.jpg' alt="avatar"/>
    </div>
    <div className="content">
            <a className="header">{props.name}name</a>
        <div className="meta">
            <span className="date">{props.dob}dob</span><br/>
            <span className="weight">{props.weight}weight</span><br/>
            <span className="height">{props.height}height</span><br/>
        </div>
        </div>
        <div className="extra content">
            <a>
                <i className="user icon"></i>
                <span className="height">{props.email}email</span>
            </a>
    </div>
</div>
  )
}

export default Profilecard;