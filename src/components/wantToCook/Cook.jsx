import PropTypes from "prop-types";
import Cooking from "../Prepearing/Cooking";
import Prepear from "../Prepearing/Prepear";
const Cook = ({ cook, handleCurrentlyCooking, currentlyCooking }) => {
    return (
        <div>
            <div className="card p-4 mb-5">
                <div className="want-to-cook">
                    <h4 className="text-center">Want To Cook: {cook.length}</h4>
                    <hr />
                    <div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Calories</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cook.map((res) => (
                                    <Cooking
                                        key={res.recipe_id}
                                        PreparingRecipe={res}
                                        handleCurrentlyCooking={
                                            handleCurrentlyCooking
                                        }
                                    ></Cooking>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="currently-cooking mt-5">
                    <h4 className="text-center">
                        Currently Cooking: {currentlyCooking.length}
                    </h4>
                    <hr />
                    <div>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="border">
                                    <th scope="col">Name</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentlyCooking.map((res) => (
                                    <Prepear
                                        key={res.recipe_id}
                                        cookingItem={res}
                                    ></Prepear>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
Cook.propTypes = {
    cook: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func,
    currentlyCooking: PropTypes.array.isRequired,
};
export default Cook;
