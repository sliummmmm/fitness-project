import React, { useRef, useState } from 'react'
import CalorieNinja from '../api/calorieNinja';
import InputArea from '../components/InputArea';
import Button from '../components/Button'

export const Dietview = (props) => {

  const BASE_URL = 'https://api.calorieninjas.com/v1/nutrition?query=';

  const foodRef = useRef();

  const [ query, setQuery ]=useState('');
  const [ foodList, setFoodList ]=useState([]);


      //Food handlers
      const onSearchFood = async ()=>{
        setQuery(BASE_URL + foodRef.current.value);
        const response = await CalorieNinja.get(query);
        console.log(response.data.items[0].name);
        setFoodList(foodList=>[...foodList,response.data.items[0]]);
        console.log(foodList);
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
          buttonText="Search Food"
          buttonAction={onSearchFood}
      />
      <div>
        
      </div>
  </div>
  )
}



export default Dietview