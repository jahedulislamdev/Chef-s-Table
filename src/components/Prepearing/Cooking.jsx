import PropTypes from "prop-types";
const Cooking = ({ PreparingRecipe, handleCurrentlyCooking }) => {
    const { recipe_name, calories, preparing_time } = PreparingRecipe;
    return (
        <tr className="text-strat">
            <td scope="col">{recipe_name}</td>
            <td scope="col">{preparing_time} min</td>
            <td scope="col">{calories} Cal</td>
            <td scope="col">
                <button
                    onClick={() => handleCurrentlyCooking(PreparingRecipe)}
                    className="btn btn-sm"
                    style={{
                        background: "#150b2bc2",
                        color: "#fff",
                    }}
                >
                    Preparing..
                </button>
            </td>
        </tr>
    );
};
Cooking.propTypes = {
    PreparingRecipe: PropTypes.object,
    handleCurrentlyCooking: PropTypes.func,
};
export default Cooking;
