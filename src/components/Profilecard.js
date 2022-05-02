import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import Button from './Button';

const Profilecard = (props) => {

  const [user, setUser] = useState({
    username:'temp',
    dob:'Tue, 26 Apr 2022 00:00:00 GMT',
    weight:'60',
    height:'170',
    email:'',
    uid:''
  });

  useEffect(()=>{
    const getUser=async()=>{
      const q = query(collection(db,"users"), where("uid", "==", props.uid));
      const data = await getDocs(q);
      data.forEach((doc)=>(setUser(doc.data())))
    }
    getUser();
  },[])


  return (
            <div className="ui card">
              <div className="image">
                <img src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/754.jpg' alt="avatar"/>
              </div>
              <div className="content">
                <a className="header">{user.username}</a>
                <div className="meta">
                  <span className="date">{user.dob}</span><br/>
                  <span className="weight">{user.weight}(kg)</span><br/>
                  <span className="height">{user.height}(cm)</span><br/>
                </div>
              </div>
                <div className="extra content">
                  <a>
                    <i className="user icon"></i>
                    <span className="height">{props.email}</span>
                  </a>
                </div>
                <div className="button">
                  <Button
                    buttonType="ui primary button"
                    buttonText="Edit"
                    // buttonAction="#"
                  />
                </div>
                {/* <div className='indicator'>{props.uid} {user.username}</div> */}
            </div>
  )
}

export default Profilecard;