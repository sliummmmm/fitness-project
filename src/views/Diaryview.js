import React, { useState, useEffect, useRef }from 'react';
import {db, useAuth} from '../firebase';
import {collection, getDocs, addDoc, deleteDoc, doc, where, query} from 'firebase/firestore';
import { getAuth } from "firebase/auth"
import Form from '../components/Form';
import Button from '../components/Button';
import DiaryCard from '../components/DiaryCard';

const Diaryview = () =>{

    const contentRef = useRef();
    const titleRef = useRef();
    const [currentDate, setCurrentDate]=useState(new Date());
    const [user, setUser]=useState();

    const currentUser = useAuth();
    
    return(
        <div style={{margin:'5%'}}>
            <div>
                <Button 
                    buttonType="positive ui button" 
                    buttonText="Create New Diary" 
                    // buttonAction={onCreateNewEntry}
                />
            </div>
            <div>
                {currentUser&&
                <>
                    <Form
                        inputContentRef={contentRef}
                        inputTitleRef={titleRef}
                        userID={currentUser.uid}
                        // submitAction={onSubmitDiary}
                    />
                </>
                }
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