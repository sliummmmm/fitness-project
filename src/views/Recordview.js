import React from 'react';
import Button from '../components/Button';
import InputArea from '../components/InputArea';
import Dropdown from '../components/Dropdown';
import {db} from '../firebase';
import {collection, addDoc, arrayRemove} from 'firebase/firestore';
import exerciseDB from '../api/exerciseDB';

class Recordview extends React.Component{

    constructor(props){
        super(props);

        const today = new Date(),
    
        date = today.toUTCString();

        this.state = {
            exerciseId:'',
            exerciseRep:'',
            groupNumber:'',
            exerciseList:[],
            planList:[]
        }
    }

    handleExercise = async (id)=>{
        await this.setState({exerciseId:id});
    }
    //create a live list of exercise
    collectExercise = async ()=> {
        const tempList = this.state.exerciseList.find((res)=>{
            return res.id === this.state.exerciseId
        })

        this.state.planList.push({"exercisename": tempList.name, "reps":this.state.exerciseRep, "groups":this.state.groupNumber, "img":tempList.gifUrl});
    }

    OnExerciseSubmit= async ()=>{
        await addDoc(collection(db,"exercises"), 
        {exerciseId: this.state.exerciseId, exerciseRep: this.state.exerciseRep, groupNumber: this.state.groupNumber});
        window.location.reload(false);
    }

    componentDidMount = async () =>{
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
                    inputType="text" 
                />
                <div><i className="x icon"></i></div>
                <InputArea
                    placeHolder="group(s)"
                    inputAction={(e) => this.setState({ groupNumber: e.target.value })}
                    inputType="text" 
                />
                <Button
                    buttonType="ui primary button"
                    buttonText="Add"
                    buttonAction={this.collectExercise}
                />
                <div className='ul list'>
                    {
                        this.state.planList.map((res,index)=>{
                            return(
                                <div key={index}>
                                    <img className="ui avatar image" src={res.img}/>
                                    <div className="content">
                                        <a className="header">{res.exercisename}</a>
                                        <div className="description">{res.reps} Rep(s) for {res.groups} Group(s)</div>
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

export default Recordview;