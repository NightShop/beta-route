/* eslint-disable max-len */
import { Link, useLocation } from "react-router-dom";

const SectorCard = (props) => {
    const { sectorId } = props;
    const location = useLocation();
    const tempData = {
        "nw-wall": {
            name: "NW wall",
            imgUrl: "https://i.imgur.com/pQuk0vc.jpg",
        },
        "se-wall": {
            name: "NE wall",
            imgUrl: "https://i.imgur.com/NgK1QUi.jpg",
        },
    };
    const data = tempData[sectorId];
    return (
        <div className="card mb-5" style={{ maxHeight: "420px", overflow: "hidden" }}>
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="card-body">
                        <h2>{data.name}</h2>
                        <Link className="stretched-link btn btn-primary" to={`${location.pathname}/${sectorId}`}>{sectorId}</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid rounded-end" src={data.imgUrl} alt={data.name} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </div>
            </div>
        </div>
    );
};

export default SectorCard;
