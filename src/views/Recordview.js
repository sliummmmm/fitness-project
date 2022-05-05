import React, { useState, useEffect, useRef}from 'react';
import Button from '../components/Button';
import InputArea from '../components/InputArea';
import Dropdown from '../components/Dropdown';
import {db} from '../firebase';
import {collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth'
import exerciseDB from '../api/exerciseDB';
import List from '../components/List';

const Recordview = ()=>{
    const today = new Date(),
    date = today.toUTCString();

    const repRef = useRef();
    const groupRef = useRef();

    const currentUser = useAuth();

    const [exercises, setExercises]=useState([]);
    const [currentExercise, setCurrentExercise]=useState({});
    const [dataList, setDataList]=useState([]);

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

    const handleChooseExercise= (id)=>{
        const tempExercise = dataList.filter((data)=>Object.values(data).some(val => val.includes(id)));
        setCurrentExercise(tempExercise[0]);
    }

    const handleAddExericse=()=>{
        const existFlag=exercises.find((res)=> res.exerciseId === currentExercise.id)

        if(!existFlag){
            console.log(currentExercise);
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


        console.log(date);
        console.log(currentUser);
    }

    return(
        <div style={{width:'100%'}}>
            <Dropdown
                options={dataList}
                onSelection={handleChooseExercise}
            />
            <div className='inputSection' style={{margin:'10px'}}>
                <InputArea
                    placeHolder="rep(s)"
                    inputRef={repRef}
                    inputType="text" 
                />
                <span><i className='x icon'></i></span>
                <InputArea
                    placeHolder="group(s)"
                    inputRef={groupRef}
                    inputType="text" 
                />
            </div>

            <Button
                buttonType="ui primary button"
                buttonText="Add"
                buttonAction={handleAddExericse}
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
    );
}

export default Recordview;