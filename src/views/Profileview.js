import React from "react";
import { useState, useRef } from 'react';
import { signUp, logIn, logOut } from "../firebase";
import { useAuth } from '../hooks/useAuth'
import Profilecard from "../components/cards/Profilecard";
import InputArea from "../components/InputArea";
import Button from "../components/Button";

const Profileview = () =>{

    const emailRef = useRef();
    const passwdRef = useRef();
    const logInEmail = useRef();
    const logInPass = useRef();
    const [loading, setLoading] = useState();

    const currentUser = useAuth();

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
            <div className="login">
                {!currentUser&&
                <>
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
                </>}

                {!currentUser && <Button
                    buttonType="ui primary button"
                    buttonText="Login"
                    buttonAction={handleLogIn}
                    loadingCondition={ loading }
                />}
            </div>
            { !currentUser && <>
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
            </>}
            <div className="profile">
                { currentUser && 
                <Profilecard 
                    uid={currentUser.uid}
                    email={currentUser.email}
                /> }
            </div>
            <div className="logOutButton">
                    { currentUser && 
                    <Button
                        buttonType="ui red button"
                        buttonText="Logout"
                        buttonAction={handleLogOut}
                        loadingCondition={ loading }
                    />}
            </div>
        </div>
    );
}

export default Profileview;