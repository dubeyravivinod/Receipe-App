import React, { useEffect, useState } from "react";
import './FetchAPI.css'


const FetchAPI = (props) => {
    
    const [error, setError ] = useState(null);
    const[isLoaded, setIsLoaded ] = useState(false);
    const[items, setItems] = useState([]);
    console.log(props.onInput, "Fetch");
    useEffect(() => {
        const response = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.onInput}`);
            const json_data = await response.json()
            const meal = json_data.meals

            console.log(json_data);
            if(meal == null) {
                setError("No Data found");
                setIsLoaded(true);
            }
            else {
                setIsLoaded(true);
                setItems(meal);
            }
        }

        response();
    }, [props.onInput])


    if (error) {
        return <>
            {error.message}
        </>
    }
    else if(!isLoaded) {
        return <>
            loading.....
        </>
    }
    else {
        return(
            <div className="FetchMainDiv">
                {items.map(meal => 
                    <div className="meal">
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <div className="meal-info">  
                        <h3 className="MealName">{meal.strMeal}</h3>
                        <h3>{meal.strInstructions}</h3>
                        </div>
                    </div>    
                )}
            </div>
        );
    }
}

export default FetchAPI;
