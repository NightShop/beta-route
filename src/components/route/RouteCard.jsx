import { Link, useLocation } from "react-router-dom";

const RouteCard = () => {
    const location = useLocation();
    const id = "hanging-monkey";
    return (
        <div className="card my-5" style={{ maxWidth: "720px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://i.imgur.com/NgK1QUi.jpg?1"
                        alt="hanging monkey"
                        className="img-fluid rounded start"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Hanging Monkey</h1>
                    <h3 className="card-text">Adam Sharma</h3>
                    <Link className="stretched-link btn btn-primary" to={`${location.pathname}/${id}`}>{id}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteCard;
