import React from 'react';
import Button from '../Button';

export const FoodCard = (props) => {

        return (
            <div className="four wide column">
                {props.foodList.map((food,index)=>{
                    return(
                    <div className="ui card" key={index}>
                        <div className="content">
                            <div className="header" style={{margin:'5px'}}>{food.name.charAt(0).toUpperCase()+food.name.slice(1)}</div>
                            <div className="meta">
                                <p>Fat: {food.fat_total_g} g</p>
                                <p>Protein: {food.protein_g} g</p>
                                <p>CarboHydrates: {food.carbohydrates_total_g} g</p>
                            </div>
                            <div style={{
                                margin:'5px'
                                }}>
                                {food.serving_size_g} g
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <Button
                                buttonText="Delete!"
                                buttonType="ui negative basic button"
                                buttonAction={()=>props.deleteFood(food.id)}
                            />
                        </div>
                    </div>
                    )
                })}
            </div>
        )
}


export default FoodCard