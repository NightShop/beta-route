import { Link } from "react-router-dom";

const SignedInLinks = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <Link className="nav-link" to="/">
                    Log Out
                </Link>
                <Link className="nav-link" to="/profile">
                    BZ
                </Link>
            </div>
        </div>
    );
};

export default SignedInLinks;
