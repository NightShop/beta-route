import { NavLink } from "react-router-dom";

const neki = "fds";

const SignedInLinks = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/">
                    Log Out
                </NavLink>
                <NavLink className="nav-link" to="/profile">
                    BZ
                </NavLink>

            </div>
        </div>
    );
};

export default SignedInLinks;
