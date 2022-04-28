import React from 'react';
import Button from '../components/Button';
import InputArea from '../components/InputArea';
import Dropdown from '../components/Dropdown';
import {db} from '../firebase';
import {collection, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore';
import exerciseDB from '../api/exerciseDB';

class Recordview extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            exerciseId:'',
            exerciseRep:'',
            groupNumber:'',
            exerciseList:[]
        }
    }

    handleExercise = async (id)=>{
        await this.setState({exerciseId:id});
    }

    OnExerciseSubmit=async()=>{
        await addDoc(collection(db,"exercises"), 
        {exerciseId: this.state.exerciseId, exerciseRep: this.state.exerciseRep, groupNumber: this.state.groupNumber});
        window.location.reload(false);
        console.log("Clicked?");
    }

    //this is for test purpose
    // componentDidUpdate(){
    //     console.log(this.state.exerciseRep);
    // }

    componentDidMount = async () =>{
        //load API
        const response=await exerciseDB.get();
        this.setState(response.data.map((res)=>(this.state.exerciseList.push(res))));
    }

    render(){
        return(
            <div style={{width:'100%'}}>
                <Dropdown
                    options={this.state.exerciseList}
                    onSelection={this.handleExercise}
                />
                <InputArea
                    placeHolder="rep(s)"
                    inputAction={(e) => this.setState({ exerciseRep: e.target.value })}
                />
                <div><i className="x icon"></i></div>
                <InputArea
                    placeHolder="group(s)"
                    inputAction={(e) => this.setState({ groupNumber: e.target.value })}
                />
                <Button
                    buttonType="ui primary button"
                    buttonText="Add"
                    buttonAction={this.OnExerciseSubmit}
                />
            </div>
        );
    }
}

export default Recordview;