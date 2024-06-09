import "./cover.css";
const Cover = () => {
    return (
        <>
            <div className="cover mt-5 position-relative">
                <div className="cover-title">
                    <h1 className="text-center text-light">
                        Discover an exceptional cooking <br /> class tailored
                        for you!
                    </h1>
                    <p className="short-des text-center w-75 m-auto mt-4">
                        Learn and Master Basic Programming, Data Structures,
                        Algorithm, OOP, Database and solve 500+ coding problems
                        to become an exceptionally well world-class Programmer.
                    </p>
                    <div className="quick-btn text-center mt-4">
                        <button className="btn me-4 btn-lg">Explore Now</button>
                        <button className="btn btn-lg">Our Feedback</button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 bg-primary-subtle p-4 rounded">
                <h3>Our Recipes</h3>
                <p className="w-75 m-auto">
                    Welcome to our Recipe Section! Discover a world of culinary
                    delights with our curated collection of recipes. From quick
                    weeknight dinners to gourmet feasts, we offer step-by-step
                    instructions, tips, and inspiration for cooks of all skill
                    levels. Explore, cook, and enjoy delicious meals every day!
                </p>
            </div>
        </>
    );
};

export default Cover;
