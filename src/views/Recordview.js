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

    OnOpenDropdown(){
        console.log("Drop down clicked");
        const axios = require("axios");
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': '2c642fac8bmsh081e9c9bb0b3d75p13dccdjsn5e11433853a3'
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
                        buttonAction=""
                    />
            </div>
        );
    }
}

export default Recordview;