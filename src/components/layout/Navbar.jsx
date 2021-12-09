import { Link, NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

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
            <Link className="navbar-brand fs-3" to="/home">
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
            <SignedOutLinks />
        </div>
    </nav>
);

export default Navbar;
