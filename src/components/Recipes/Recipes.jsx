import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../wantToCook/Cook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        // check this element already exist or not is my array
        const isAlreadyInCart = cook.some(
            (item) => item.recipe_id === newItem.recipe_id,
        );
        if (isAlreadyInCart) {
            toast.error("Item Already Exist", {
                autoClose: 1000,
                position: "top-right",
            });
            return;
        } else {
            toast.success("Item Added Successfully", {
                autoClose: 2000,
                position: "top-right",
            });
        }
        setCook([...cook, newItem]);
    };
    // currently cooking state and preparing click handler
    const [currentlyCooking, SetCurrentlyCooking] = useState([]);
    const handleCurrentlyCooking = (item) => {
        // add delete item to currently cooking table
        const isAlreadyInCooking = currentlyCooking.some(
            (newRecipe) => newRecipe.recipe_id === item.recipe_id,
        );
        if (isAlreadyInCooking) {
            toast.warning("Opps! Item Currently Cooking", {
                autoClose: 1000,
                position: "top-right",
                theme: "colored",
            });
            return;
        }
        // delete want to cook item
        const remaining = cook.filter((idx) => idx !== item);
        setCook(remaining);

        // push item in currentlyCooking
        SetCurrentlyCooking([...currentlyCooking, item]);
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
                <ToastContainer />
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
