import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, where, query, updateDoc } from 'firebase/firestore';
import Button from './Button';
import Modal from 'react-modal';
import { onIdTokenChanged } from 'firebase/auth';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Profilecard = (props) => {

  const [user, setUser] = useState({ });
  const [editOpen, setEditOpen]=useState(false);
  const usernameRef = useRef();
  const dobRef = useRef();
  const weightRef = useRef();
  const heightRef = useRef();

  useEffect(()=>{
    const getUser=async()=>{
      const q = query(collection(db,"users"), where("uid", "==", props.uid));
      await getDocs(q).then(
        (snapShot) => {
          if(!snapShot.empty){
            snapShot.forEach((snap)=>(setUser({...snap.data(), id: snap.id})))
          }
          else{
              addDoc(collection(db,"users"), {
              username:'Anonymous',
              dob:'Tue, 26 Apr 2022 00:00:00 GMT',
              weight:'60',
              height:'170',
              uid: props.uid
            });
          }
        }
      );
    }
    getUser();

  },[])

  const onUpdateUser = async (id) => {
    const userDoc = doc(db,"users",id);
    const updates = {
      username: usernameRef.current.value,
      dob: dobRef.current.value,
      weight: weightRef.current.value,
      height: heightRef.current.value
    }
    
    await updateDoc(userDoc, updates);
  }

  const onClickEdit = () =>{
    setEditOpen(true);
  }

  const closeEdit = () =>{
    setEditOpen(false);
  }

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
                    buttonAction={onClickEdit}
                  />
                </div>
                <Modal
                  isOpen={editOpen}
                  onRequestClose={closeEdit}
                  style={modalStyle}
                  contentLabel="Example Modal"
                >
                  <div>
                    <form className="ui form">
                      <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" ref={usernameRef} defaultValue={user.username}/>
                      </div>
                      <div className="field">
                        <label>Date of birth</label>
                        <input type="text" name="dob" placeholder="Date of birth" ref={dobRef} defaultValue={user.dob}/>
                      </div>
                      <div className="field">
                        <label>Weight</label>
                        <input type="text" name="weight" placeholder="Weight(kg)" ref={weightRef} defaultValue={user.weight}/>
                      </div>
                      <div className="field">
                        <label>Height</label>
                        <input type="text" name="height" placeholder="Height(cm)" ref={heightRef} defaultValue={user.height}/>
                      </div>
                      <Button
                        buttonType="ui primary button"
                        buttonText="Submit"
                        buttonAction={()=>onUpdateUser(user.id)}
                      />
                    </form>
                  </div>
                </Modal>
            </div>
  )
}

export default Profilecard;