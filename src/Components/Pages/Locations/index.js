import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getData } from '../../Services/RestAPI';
import { ROUTES } from '../../Constants/Routes';

const Locations = () => {
    const [locations, setLocations] = useState();
    const [number, setNumber] = useState(1);
    const cat = 'location';
    const history = useHistory();

    useEffect(() => {
        getData(cat, number)
            .then(data => setLocations(data.results))
    }, []);

    const goToLocationPage = (location) => {
        history.push(`${ROUTES.LOCATION}/${location.id}`);
    };

    return (
        <div>
            <h1>Locations</h1>
            {locations ? locations.map((location) => {
                return (
                    <div onClick={() => goToLocationPage(location)} key={location.id}>
                        <p>{location.name}</p>
                        <p>{location.type}</p>
                        <p>{location.dimension}</p>
                    </div>
                );
            }) : null}
        </div>
    );
};

export default Locations;
