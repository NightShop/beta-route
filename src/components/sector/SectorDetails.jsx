import { useParams } from "react-router-dom";
import RouteList from "../route/RouteList";

const SectorDetails = () => {
    const params = useParams();
    return (
        <div>
            <h1>
                Crag name:
                {" "}
                {params.cragId}
            </h1>
            <h2>
                Sector name:
                {" "}
                {params.sectorId}
            </h2>
            <RouteList />
        </div>
    );
};

export default SectorDetails;
