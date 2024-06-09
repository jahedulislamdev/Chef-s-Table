import Cover from "./components/Cover/Cover";
import Navbar from "./components/Nabvar/Navbar";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Cover></Cover>
            <div className="row">
                <Recipes></Recipes>
            </div>
        </div>
    );
};

export default App;
