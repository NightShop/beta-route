import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CragCard = () => {
    const [cragInfo, setCragInfo] = useState({
        name: "Športni park Svoboda",
        id: "sportni-park-svoboda",
        description: `Balvanska umetna stena manjše velikosti. Uporaba je brezplačna v bližini se nahaja bar,
         nogometno igrišče, picerija Hombre. Parkirišče je plačljivo.`,
        price: "Free",
        location: "Smarjeska 4, Vic, Ljubljana",
        photo: "https://www.sport-ljubljana.si/f/pics/Sportni_park_Svoboda/100_7_b.jpg",
        public: true,
    });

    const navigate = useNavigate();

    const goToCrag = (id) => {
        navigate(`/crags/${id}`);
    };

    return (
            <div className="card mb-5 mx-auto" style={{ maxWidth: "960px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://www.sport-ljubljana.si/f/pics/Sportni_park_Svoboda/100_7_b.jpg"
                            alt={cragInfo.name}
                            className="img-fluid rounded start"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {cragInfo.name}
                            </h5>
                            <p className="card-text">
                                {cragInfo.description}
                            </p>
                            <p className="card-text">
                                <span>Price: </span>
                                <span>{cragInfo.price}</span>
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {cragInfo.location}
                                </small>
                            </p>
                            <button type="button" onClick={() => goToCrag(cragInfo.id)} className="btn btn-primary">
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CragCard;
