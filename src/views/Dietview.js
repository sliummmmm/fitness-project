import React, { useRef, useState, useEffect } from 'react'
import CalorieNinja from '../api/calorieNinja';
import InputArea from '../components/InputArea';
import Button from '../components/Button'
import FoodCard from '../components/cards/FoodCard';

export const Dietview = (props) => {

  const BASE_URL = 'https://api.calorieninjas.com/v1/nutrition?query=';

  const foodRef = useRef();

  const [ query, setQuery ]=useState('');
  const [ foodList, setFoodList ]=useState([]);
  const [ totalCalories, setTotalCalories ]=useState(0);
  const [ searchToggler, setSearchToggler ]=useState(0);

  useEffect(()=>{
    const handleSearchFood = async ()=>{
      if(query!==''){
        const response = await CalorieNinja.get(query);
        setFoodList(foodList=>[...foodList, response.data.items[0]]);
        setTotalCalories(totalCalories+response.data.items[0].calories)
      }
    }
    handleSearchFood();
  },[searchToggler])

  //Food handlers
  const onSearchFood = ()=>{
    const url= BASE_URL+foodRef.current.value;
    setQuery(url);
    setSearchToggler(searchToggler+1);
  }

  // const onCalculateCalories = ()=>{
  //   foodList.map((food)=>{
  //     setTotalCalories(totalCalories + Number(food.calories));
  //   })
  // }
  console.log(totalCalories)
  console.table(foodList);

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
        />
      </div>
  </div>
  )
}



export default Dietview