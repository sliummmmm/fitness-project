import React, { useState, useEffect, useRef}from 'react';

import {db} from '../firebase';
import {collection, addDoc, query } from 'firebase/firestore';

import { useAuth } from '../hooks/useAuth'
import CalorieNinja from '../api/calorieNinja';
import exerciseDB from '../api/exerciseDB';

import List from '../components/List';
import Button from '../components/Button';
import InputArea from '../components/InputArea';
import Dropdown from '../components/Dropdown';
import ExerciseForm from '../components/forms/ExerciseForm';


const Recordview = ()=>{
    const BASE_URL = 'https://api.calorieninjas.com/v1/nutrition?query=';
    const today = new Date(), date = today.toUTCString();

    const repRef = useRef();
    const groupRef = useRef();
    const foodRef = useRef();

    const currentUser = useAuth();

    const [ exercises, setExercises ]=useState([]);
    const [ currentExercise, setCurrentExercise ]=useState({});
    const [ dataList, setDataList ]=useState([]);
    const [ query, setQuery ]=useState('');

    useEffect(()=>{
        const onApiCall = async ()=>{
            const response=await exerciseDB.get();
            response.data.map(
                (res)=>{
                    setDataList(dataList=>[...dataList,res])
                })
        }

        onApiCall();
    },[])

    //Exercise Handlers
    const handleChooseExercise= (id) =>{
        const tempExercise = dataList.filter((data)=>Object.values(data).some(val => val.includes(id)));
        setCurrentExercise(tempExercise[0]);
    }

    const handleAddExericse= () =>{
        const existFlag=exercises.find((res)=> res.exerciseId === currentExercise.id)

        if(!existFlag){
            setExercises(exercises=>[...exercises, {
                exerciseId:currentExercise.id,
                exercisename:currentExercise.name,
                exerciseRep:Number(repRef.current.value),
                groupNumber:Number(groupRef.current.value), 
                exercisePart:currentExercise.target,
                exerciseImg:currentExercise.gifUrl
            }]);
        }else{
            setExercises(
                exercises.map(
                    (res)=>res.exerciseId===currentExercise.id && {...existFlag, exerciseRep: res.exerciseRep + Number(repRef.current.value), groupNumber: res.groupNumber + Number(groupRef.current.value)}
                )
            )
        }
    }

    const handleRemoveExercise=(exercise)=>{

            setExercises(exercises.filter((res)=>res.exerciseId !== exercise.exerciseId))
    }

    const onSubmitExercise= async ()=>{

        exercises.map((exercise)=>{
            addDoc(collection(db,"exercises"), 
            {
                date: date, 
                exerciseId: exercise.exerciseId, 
                exerciseRep: exercise.exerciseRep, 
                groupNumber: exercise.groupNumber, 
                uid: currentUser.uid
            });
        });
        window.location.reload(false);
    }
    //End of Exercise handlers

    //Food handlers
    const onSearchFood = async ()=>{
        setQuery(foodRef.current.value);
        const response = await CalorieNinja.get(BASE_URL+query);
        console.log(response);
    }
 
    return(

        <div>
            <div className='exerciseSection'>
                <ExerciseForm
                    dataList={dataList}
                    onChoose={handleChooseExercise}
                    rep={repRef}
                    group={groupRef}
                    onAdd={handleAddExericse}
                />
                <div className='ul list'>
                    <List 
                        listItems={exercises}
                        removeAction={handleRemoveExercise}
                    />
                    <Button 
                        buttonType="positive ui button"
                        buttonText="That's all I have done!!"
                        buttonAction={onSubmitExercise}
                    />
                </div>
            </div>
            <div className='foodSection'>
                <InputArea
                    placeHolder="Enter food name to search"
                    inputRef={foodRef}
                    inputType="text"
                    inputAction={onSearchFood}
                />
                <Button
                    buttonType="positive ui button"
                    buttonText="Search Food"
                    buttonAction={onSearchFood}
                />
            </div>
        </div>

    );
}

export default Recordview;