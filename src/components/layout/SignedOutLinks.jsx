import { Link } from "react-router-dom";

const SignedOutLinks = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <Link className="nav-link" to="/signup">
                    Sign Up
                </Link>
                <Link className="nav-link" to="/signin">
                    Login
                </Link>

            </div>
        </div>
    );
};

export default SignedOutLinks;
