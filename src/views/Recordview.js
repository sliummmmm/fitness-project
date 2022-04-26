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

        this.state = {};
    };

    OnExerciseSubmit(){
        console.log("Enter a exercise");
        console.log(process.env.REACT_APP_RAPID_API_HOST);
    }

    OnOpenDropdown(){
        console.log("Drop down clicked");
        const axios = require("axios");
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          headers: {
            'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });}

    render(){
        return(
            <div>
                    <Dropdown 
                        dropDownAction={this.OnOpenDropdown}
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