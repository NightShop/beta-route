import { useParams } from "react-router-dom";
import SectorCard from "./SectorCard";

const SectorList = () => {
    const params = useParams();

    return (
        <div>
            <h2>{params.cragId}</h2>
            <h4>Some info about sector itd..</h4>
            <SectorCard sectorId="nw-wall" />
            <SectorCard sectorId="se-wall" />
        </div>
    );
};

export default SectorList;
