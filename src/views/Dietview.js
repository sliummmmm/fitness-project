import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

import {db} from '../firebase';
import {collection, addDoc } from 'firebase/firestore';

import CalorieNinja from '../api/calorieNinja';

import InputArea from '../components/InputArea';
import Button from '../components/Button'
import FoodCard from '../components/cards/FoodCard';

import _uniqueId from 'lodash/uniqueId';

export const Dietview = (props) => {
  const today = new Date(), date = today.toUTCString();
  const currentUser = useAuth();

  const BASE_URL = 'https://api.calorieninjas.com/v1/nutrition?query=';

  const foodRef = useRef();

  const [ query, setQuery ]=useState('');
  const [ foodList, setFoodList ]=useState([]);
  const [ totalCalories, setTotalCalories ]=useState(0);
  const [ searchToggler, setSearchToggler ]=useState(0);
  const [ id, setId ]=useState(_uniqueId());
  
  //TO-DO: fix dynamic calories issue
  useEffect(()=>{
    const handleSearchFood = async ()=>{
      setId(_uniqueId())
      if(query!==''){
        const response = await CalorieNinja.get(query);
        setFoodList(foodList=>[...foodList, {...response.data.items[0], id}]);
        setTotalCalories(totalCalories+response.data.items[0].calories)
      }
    }
    handleSearchFood();
  },[searchToggler])

  const onSearchFood = ()=>{
    const url= BASE_URL+foodRef.current.value;
    setQuery(url);
    setSearchToggler(searchToggler+1);
    foodRef.current.value = "";
    foodRef.current.focus();
  }

  const onDeleteFood = (id)=>{
    setFoodList(foodList.filter((res)=>res.id !== id));
  }

  const onSubmitFood = async()=>{
    foodList.map((food)=>{
      addDoc(collection(db,"diet"), 
      {
          date: date, 
          FoodName: food.name,
          FoodCalories: food.calories, 
          FoodCarbo: food.carbohydrates_total_g, 
          FoodFat_g: food.fat_total_g, 
          FoodProtein_g: food.protein_g,
          uid: currentUser.uid
      });
  });
  window.location.reload(false);
  }

  return (
    <div className='foodSection'>
      <InputArea
          placeHolder="Enter food name to search"
          inputRef={foodRef}
          inputType="text"
      />
      <Button
          buttonType="positive ui button"
          buttonText="Add Food"
          buttonAction={onSearchFood}
      />
      <div>
        <div className="ui visible message">
          <p>You have eaten {totalCalories.toFixed(2)} calories</p>
        </div>
        <FoodCard
          foodList={foodList}
          deleteFood={onDeleteFood}
        />
        </div>
        <Button
          buttonType="ui primary button"
          buttonText="That's all I have eaten!!"
          buttonAction={onSubmitFood}
        />
  </div>
  )
}


export default Dietview