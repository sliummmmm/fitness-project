import React from 'react';
import {db} from '../firebase';
import {collection, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore';
import Form from '../components/Form';
import Button from '../components/Button';
import { async } from '@firebase/util';

class Diaryview extends React.Component{

    constructor(props) {
        super(props);
   
        const today = new Date(),
    
        date = today.toUTCString();
    
        this.state = {
            content: '',
            title: '',
            userId: '000',
            currentDate: date,
            diaries: []
        }
      }

    async componentDidMount(){
        const data = await getDocs(collection(db,"diaries"));
        const diaries = data.docs.map((doc)=>({...doc.data(),id: doc.id}));
        this.setState(diaries.map((diary)=>(this.state.diaries.push(diary))));
    }

    //TO-DO new entry event
    onCreateNewEntry(){

    }

    async onSubmitDiary(){
        await addDoc(collection(db,"diaries"), {Content: this.state.content, Title: this.state.title, UserID: this.state.userId, PostOn: this.state.currentDate});
        window.location.reload(false);
    }

    async deleteDiary(id){
        const userDoc = doc(db, "diaries", id);
        await deleteDoc(userDoc);
        window.location.reload(false);
    }   

    render(){
        return(
            <div style={{margin:'5%'}}>
                <div>
                    <Button 
                        buttonType="positive ui button" 
                        buttonText="Create New Diary" 
                        buttonAction={this.onCreateNewEntry}
                    />
                </div>
                <div>
                    <Form
                        inputContentAction={(e) => this.setState({ content: e.target.value })}
                        inputContentValue={this.state.content}
                        inputTitleAction={(e) => this.setState({ title: e.target.value })}
                        inputTitleValue={this.state.title}
                        userID={this.state.userId}
                        submitAction={this.onSubmitDiary}
                    />
                </div>
                {/* TO-DO render diary contents */}
                <div className="ui stackable four column grid" style={{width:'1280px'}}>
                    {
                        this.state.diaries.map((diary)=>{
                            return(
                                <div className="four wide column" >
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
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}


export default Diaryview;