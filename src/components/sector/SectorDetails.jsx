import { useParams } from "react-router-dom";

const SectorDetails = () => {
    const params = useParams();
    return (
        <div>
            <h1>{params.cragId}</h1>
            <h2>{params.sectorId}</h2>
        </div>
    )
};

export default SectorDetails;
