import React, { useEffect, useState } from 'react';
import { getData } from '../../Services/RestAPI';

import './episodes.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState();
    const [number, setNumber] = useState(1)
    const cat = "episode";

    useEffect(() => {
        getData(cat,number)
        .then(data => setEpisodes(data.results))
    },[]);

    console.log(episodes)
    return (
        <div className="page-container">
            <h1 className="page-header">Episodes</h1>
            {episodes ? episodes.map((episode) => {
                return (
                    <div className="episode-container" key={episode.id}>
                        <p className="dynaminc-value">{episode.id})</p>
                        <p className="static-value"> Episode name: </p> <p className="dynaminc-value"> {episode.name} </p>
                        <p className="static-value"> Air date: </p> <p className="dynaminc-value"> {episode.air_date} </p>
                        <p className="info-span"> info</p>
                    </div>
                )
            })
            :null}
        </div>
    );
};

export default Episodes;
