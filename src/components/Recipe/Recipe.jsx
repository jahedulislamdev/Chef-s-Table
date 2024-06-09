import PropTypes from "prop-types";
const Recipe = ({ myRecipes, handlePreparing }) => {
    const {
        recipe_img,
        recipe_name,
        short_description,
        ingredients,
        preparing_time,
        calories,
    } = myRecipes;
    return (
        <div className="col-6 ">
            <div className="card p-2 mb-4">
                <img
                    src={recipe_img}
                    alt="recipe img"
                    className="card-img-top img-fluid object-fit-cover rounded"
                    style={{
                        width: "100%",
                        height: "280px",
                    }}
                />
                <div className="recipe-details">
                    <h4 className="fw-bold mt-2">{recipe_name}</h4>
                    <p>{short_description}.</p>
                    <div className="ingredients">
                        <p className="fw-bold">
                            Indredients : {ingredients.length}
                        </p>
                        {ingredients.map((i, idx) => (
                            <ul key={idx}>
                                <li>{i}</li>
                            </ul>
                        ))}
                    </div>
                    <div className="prepearing-timen d-flex justify-content-between px-3">
                        <p className="border p-2 rounded bg-primary-subtle">
                            <i className="fa-regular fa-clock me-2"></i>
                            {preparing_time}
                        </p>
                        <p className="border p-2 rounded bg-primary-subtle text-dark">
                            <i className="fa-solid fa-fire-flame-curved me-2 text-danger"></i>
                            {calories}
                        </p>
                    </div>
                    <div className="text-center d-grid">
                        <button
                            onClick={() => handlePreparing(myRecipes)}
                            className="btn btn-lg mt-3"
                            style={{
                                background: "#150b2bc2",
                                color: "#fff",
                            }}
                        >
                            Want To Cook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    myRecipes: PropTypes.object.isRequired,
    handlePreparing: PropTypes.func.isRequired,
};
export default Recipe;
