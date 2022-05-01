import React from "react";
import { useState, useRef, useEffect} from 'react';
import { db } from '../firebase';
import { signUp, useAuth, logIn, logOut} from "../firebase";
import { collection, doc, docs, getDocs, where } from 'firebase/firestore';
import Profilecard from "../components/Profilecard";
import InputArea from "../components/InputArea";
import Button from "../components/Button";
import { FirebaseError } from "firebase/app";


const Profileview = () =>{

    const emailRef = useRef();
    const passwdRef = useRef();
    const logInEmail = useRef();
    const logInPass = useRef();
    const [loading, setLoading] = useState();
    const [user, setUser]= useState([]);

    // username:'',
    // dob:'',
    // weight:'',
    // height:'',
    // email:'',
    // uid:''

    const currentUser = useAuth();


    useEffect(()=>{
        const getUser = async ()=>{
            await getDocs(collection(db,"users"), where("uid", "==", currentUser?.uid)).then(
                (data)=>{
                    setUser(user =>({...user, username:'1'}))
                }
            );

            console.log(user);
        }

        getUser();

    },[]);

    const loadProfileCard = () =>{
        return(
            <Profilecard
                userData={user}
            />
        )
    }

    const handleRegister = async () => {

        setLoading(true);
        try{
            await signUp(emailRef.current.value, passwdRef.current.value);
        }
        catch{
           alert('Error!');
        }
        setLoading(false);
    }

    const handleLogIn= async () => {

        setLoading(true);
        try{
            await logIn(logInEmail.current.value, logInPass.current.value);
        }
        catch(err){
           alert(err);
        }
        setLoading(false);
    }

    const handleLogOut = async () => {
        setLoading(true);
        try{
            await logOut();
        }
        catch(err){
            alert('Error!');
        }
        setLoading(false);
    }


    return(
        <div>
            <div>Login as: { currentUser?.uid }</div>
            <div className="login">
                <InputArea
                    placeHolder="Email"
                    inputType="text"
                    inputRef={logInEmail}
                />
                <InputArea
                    placeHolder="Password"
                    inputType="password"
                    inputRef={logInPass}
                />
                <Button
                    buttonType="ui primary button"
                    buttonText="Login"
                    buttonAction={handleLogIn}
                    loadingCondition={ loading || currentUser }
                />
                <Button
                    buttonType="ui red button"
                    buttonText="Logout"
                    buttonAction={handleLogOut}
                    loadingCondition={ loading || !currentUser }
                />
            </div>
            <div className="register">
                <InputArea
                        placeHolder="Enter Email to register"
                        inputType="text"
                        inputRef={emailRef}
                    />
                    <InputArea
                        placeHolder="Enter a Password"
                        inputType="password"
                        inputRef={passwdRef}
                    />
                    <Button
                        buttonType="ui primary button"
                        buttonText="Register"
                        buttonAction={handleRegister}
                        loadingCondition={loading || currentUser }
                    />
            </div>
            <div className="profile">
                {loadProfileCard()}
            </div>
        </div>
    );
}







export default Profileview;