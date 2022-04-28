import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '../components/Button';
import InputArea from '../components/InputArea';
import Dropdown from '../components/Dropdown';
import Form from '../components/Form';

class Recordview extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            exerciseList:[]
        }
    }

    OnExerciseSubmit(){
        console.log("Enter a exercise");
    }

    componentDidMount = async () =>{

        const axios = require("axios");
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          headers: {
            'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
          }
        };
        
        const response=await axios.request(options);

        this.setState(response.data.map((res)=>(this.state.exerciseList.push(res))));

        console.log(this.state.exerciseList);

    }

    render(){
        return(
            <div>
                <Dropdown 
                    dropDownAction={this.OnOpenDropdown}
                    dropDownContent={this.state.exerciseList}
                />
                <InputArea/>
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