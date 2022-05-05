import React, { useState, useRef }from 'react';
import {db} from '../firebase';
import { useAuth } from '../hooks/useAuth'
import {collection, addDoc} from 'firebase/firestore';
import Form from '../components/Form';
import Button from '../components/Button';
import DiaryCard from '../components/cards/DiaryCard';
import Modal from 'react-modal';

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

const Diaryview = () =>{

    const contentRef = useRef();
    const titleRef = useRef();
    const [currentDate, setCurrentDate]=useState(new Date());
    const [creationOpen, setCreationOpen]=useState(false);

    const currentUser = useAuth();
    
    //TO-DO: use modal for diary creation
    const onSubmitDiary = async () =>{
        await addDoc(collection(db,"diaries"), {Content: contentRef.current.value, Title: titleRef.current.value, UserID: currentUser.uid, PostOn: currentDate.toUTCString(), isDone: false});
        window.location.reload(false);
    }

    const onCreateNewEntry = () =>{
        setCreationOpen(true);
      }
    
      const closeCreationEntry = () =>{
        setCreationOpen(false);
      }

    return(
        <div style={{margin:'5%'}}>
            <div>
                <Button 
                    buttonType="positive ui button" 
                    buttonText="Add a task!" 
                    buttonAction={onCreateNewEntry}
                />
            </div>
            <div>
                <Modal
                    isOpen={creationOpen}
                    onRequestClose={closeCreationEntry}
                    style={modalStyle}
                    contentLabel="Example Modal">
                {currentUser&&
                <>
                    <Form
                        inputContentRef={contentRef}
                        inputTitleRef={titleRef}
                        userID={currentUser.uid}
                        submitAction={onSubmitDiary}
                    />
                </>
                }
                </Modal>
            </div>
            <div style={{width:'100%', margin:'5%'}}>
                {currentUser&& <DiaryCard
                    uid={currentUser.uid}
                />}
            </div>
        </div>
    );
}


export default Diaryview;