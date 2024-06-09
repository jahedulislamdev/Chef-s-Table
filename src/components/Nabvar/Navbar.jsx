import user from "../../images/User.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="bg-primary-subtle mt-2 px-3 rounded">
            <nav className="navbar navbar-expand-lg">
                <h3 className="navbar-brand fs-4 fw-bolder">Recipe Calories</h3>
                <ul className="list-unstyled navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link me-3" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="#">
                            Recipe
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Search
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav list-unstyled ms-auto">
                    <div className="input-group">
                        <div className="input-group-prepend form-control rounded-5 ">
                            <button className="border-0 bg-body fs-5">
                                <i className="fa-solid fa-magnifying-glass"></i>{" "}
                            </button>
                            <input
                                type="text"
                                className=" border-0 fs-5"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="user-icon">
                        <img
                            src={user}
                            alt="icon"
                            className="img-fluid ms-3 w-75"
                        />
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
