import React, { useState, useEffect, useRef }from 'react';
import {db} from '../firebase';
import {collection, getDocs, addDoc, deleteDoc, doc, where, query} from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';
import Form from '../components/Form';
import Button from '../components/Button';

const Diaryview = () =>{

    const contentRef = useRef();
    const titleRef = useRef();
    const [currentDate, setCurrentDate]=useState();
    const [diaries, setDiaries]=useState([]);

    const currentUser = useAuth();

    const today = new Date();
    setCurrentDate(today.toUTCString());

    useEffect(()=>{
        const getDiaries = async()=>{

            const q = query(collection(db,"diaries"), where("uid", "==", currentUser.uid));
            const data = await getDocs(q);
            data.forEach((doc)=>(setDiaries(doc.data())))
        }
        console.log(diaries);
        getDiaries();
    },[])

    const onCreateNewEntry=()=>{

    }

    const onSubmitDiary=async()=>{
        await addDoc(collection(db,"diaries"), {Content: this.state.content, Title: this.state.title, UserID: this.state.userId, PostOn: this.state.currentDate});
        window.location.reload(false);
        console.log("Clicked?");
    }

    const deleteDiary=async(id)=>{
        const userDoc = doc(db, "diaries", id);
        await deleteDoc(userDoc);
        window.location.reload(false);
    } 

    return(
        <div style={{margin:'5%'}}>
            <div>
                <Button 
                    buttonType="positive ui button" 
                    buttonText="Create New Diary" 
                    buttonAction={onCreateNewEntry}
                />
            </div>
            <div>
                <Form
                    inputContentRef={contentRef}
                    inputTitleAction={titleRef}
                    // userID={currentUser.uid}
                    submitAction={onSubmitDiary}
                />
            </div>
            {/* TO-DO render diary contents */}
            this.state.diaries.map((diary,index)=>{
                            return(
                                <div className="four wide column" key={index}>
                                    <div className="ui card" style={{width: '300px'}}>
                                        <div className="content">
                                            <div className="header">{diary.Title}</div>
                                            <div className="meta">
                                                <span>{diary.PostOn}</span>
                                                <a>From User: {diary.UserID}</a>
                                            </div>
                                            <div>
                                                {diary.Content}
                                            </div>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <div>
                                                <Button
                                                    buttonText="Delete"
                                                    buttonType="ui negative basic button"
                                                    buttonAction={()=>{this.deleteDiary(diary.id)}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

        </div>
    );
}


export default Diaryview;