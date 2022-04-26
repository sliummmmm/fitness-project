import React from 'react';
import {db} from '../firebase';
import {collection, getDocs} from 'firebase/firestore';
import Form from '../components/Form';
import Button from '../components/Button';

class Diaryview extends React.Component{

    state = {
        content: '',
        title: '',
        diaries: []
    };

    componentDidMount(){
        const getDiaries = async () => {
            const diary = await getDocs(collection(db,"diaries"));
            this.setState({diaries: diary.docs.map((doc)=>({...doc.data()}))});
        };

        getDiaries();
    }

    listDiaries(){

        return(
            <div className="ui card">
            <div className="content">
                <div className="header">Cute Dog</div>
                <div className="meta">
                    <span>2 days ago</span>
                    <a>Animals</a>
                </div>
                <div>
                </div>
            </div>
        </div>
        );
    }

    //TO-DO make new diary entry modal
    setModalOpen(){

    };
    //TO-DO new entry event
    onCreateNewEntry(){
        console.log("Enter new diary entry");
    }
    //TO-DO submit diary entry
    onSubmitDiary(){
        console.log("New diary entered");
    }

    render(){
        return(
            <div>
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
                        submitAction={this.onSubmitDiary}
                    />
                </div>
                {/* TO-DO render diary contents */}
                <div>
                    {this.listDiaries()}
                </div>
            </div>
        );
    }
}

export default Diaryview;