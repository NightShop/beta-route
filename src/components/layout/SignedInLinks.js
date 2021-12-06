import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const SignedInLinks = () => {
    const [slate, setSlate] = useState(0);
    const neki = "kaj";
    const test = neki;
    useEffect(() => {
    }, [slate, test]);

    setSlate("neki");

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
