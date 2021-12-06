import { Link, NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";

const Navbar = () => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fs-5">
        <div className="container">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <Link className="navbar-brand mx-4 fs-3" to="/home">
                β
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/home">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/crags">
                        Crags
                    </NavLink>
                </div>
            </div>
            <SignedInLinks />
        </div>
    </nav>
);

export default Navbar;
