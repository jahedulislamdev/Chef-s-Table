import PropTypes from "prop-types";
const Prepear = ({ cookingItem }) => {
    const { recipe_name, calories, preparing_time } = cookingItem;
    return (
        <tr>
            <td className="text-start">{recipe_name}</td>
            <td className="text-start">{preparing_time} min</td>
            <td className="text-end">{calories} cal</td>
        </tr>
    );
};
Prepear.propTypes = {
    cookingItem: PropTypes.object,
};
export default Prepear;
