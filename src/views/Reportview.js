import React, { useState, useEffect, useRef }from 'react';
import {db} from '../firebase';
import { useAuth } from '../hooks/useAuth'
import {collection, getDocs, deleteDoc, doc, where, query, updateDoc} from 'firebase/firestore';

const Reportview = () =>{

  const currentDate = new Date();
  const currentUser = useAuth();
  
  const [ displayDate, setDisplayDate ] = useState(currentDate);
  const [ reports, setReports ] = useState([]);


  const handlePrevious = ()=>{
    const previousWeek = new Date(displayDate.getFullYear(), displayDate.getMonth(), displayDate.getDate() - 7);
    setDisplayDate(previousWeek);
  }

  const handleNext = ()=>{
    const nextWeek = new Date(displayDate.getFullYear(), displayDate.getMonth(), displayDate.getDate() + 7);
    setDisplayDate(nextWeek);
  }


    return (
      <div className="ui menu">
        <a className="item" onClick={handlePrevious}>Previous</a>
        <div className='displayArea' style={{display:'flex', alignItems:'center'}}>
          <div className='currentDate' style={{margin:'0 60px 0 60px'}}>
          {displayDate.toUTCString()}
          </div>
        </div>
        <div className="right menu">
          <a className="item" onClick={handleNext}>Next</a>
        </div>
      </div>
  )
}


export default Reportview;