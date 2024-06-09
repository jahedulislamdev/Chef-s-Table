import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../wantToCook/Cook";
const Recipes = () => {
    // feaching json fake data
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        fetch("recipe.json")
            .then((res) => res.json())
            .then((data) => setRecipe(data));
    }, []);
    // cooking state and click handler
    const [cook, setCook] = useState([]);
    const handlePreparing = (newItem) => {
        const newRecipe = [...cook, newItem];
        setCook(newRecipe);
    };
    // Total time and calories addition state declear
    // const [time, setTime] = useState(0);
    // const [totalCalories, setTotalCalories] = useState(0);
    // currently cooking state and preparing click handler
    const [currentlyCooking, SetCurrentlyCooking] = useState([]);
    const handleCurrentlyCooking = (item) => {
        // delete want to cook item
        const remaining = cook.filter((idx) => idx !== item);
        setCook(remaining);
        // add delete item to currently cooking table
        const newItem = [...currentlyCooking, item];
        SetCurrentlyCooking(newItem);
        // total calories and total time addition
        // setTotalCalories(totalCalories + item);
        // setTime(time + item);
        // console.log(item, "this");
    };
    return (
        <div className="row mt-5">
            <div className="col-7">
                <div className="row">
                    {recipe.map((item) => (
                        <Recipe
                            key={item.recipe_id}
                            myRecipes={item}
                            handlePreparing={handlePreparing}
                        ></Recipe>
                    ))}
                </div>
            </div>
            <div className="col-5">
                <Cook
                    currentlyCooking={currentlyCooking}
                    cook={cook}
                    handleCurrentlyCooking={handleCurrentlyCooking}
                ></Cook>
            </div>
        </div>
    );
};
export default Recipes;
