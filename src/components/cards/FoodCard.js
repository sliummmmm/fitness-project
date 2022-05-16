import React from 'react';
import Button from '../Button';

export const FoodCard = (props) => {
    console.table(props.foodList)

  return (
    <div className="four wide column">
    {props.foodList.map((food,index)=>{
        return(
                <div className="ui card" key={index}>
                    <div className="content">
                        <div className="header">{food.name}</div>
                        <div className="meta">
                            <p>Fat: {food.fat_total_g}</p>
                            <p>Protein: {food.protein_g}</p>
                            <p>CarboHydrates: {food.carbohydrates_total_g}</p>
                        </div>
                        <div>
                        {food.serving_size_g} g
                        </div>
                    </div>
                    <div style={{display:'flex'}}>

                        <Button
                            buttonText="Delete!"
                            buttonType="ui negative basic button"
                        />
                    </div>
                </div>
        )
    })}
</div>
  )
}


export default FoodCard