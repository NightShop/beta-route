import { Link, useLocation } from "react-router-dom";

const SectorCard = (props) => {
    const { sectorId } = props;
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Link to={`${location.pathname}/${sectorId}`}>{sectorId}</Link>
        </div>
    );
};

export default SectorCard;
