import React from "react";
import {db} from '../firebase';
import {collection, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore';
import { async } from '@firebase/util';
import faker from '@faker-js/faker';


class Profileview extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: []
        };
    };

    componentDidMount = async (id) => {
        const userDoc = doc(db, "users", id)
        // console.log(userDoc);
        // const data = await getDocs(userDoc)
        // console.log(data);
    }

    render(){
        return(
            <div className="ui card">
                <div className="image">
                <img src={faker.image.avatar()}/>
                </div>
                <div className="content">
                    <a className="header">#User</a>
                <div className="meta">
                    <span className="date">#Start date</span>
                </div>
                <div className="description">
                    #Description
                </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        #Target
                    </a>
                </div>
            </div>
        );
    }
};

export default Profileview;