import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import { getCharacter, getAllInfo } from '../../Services/RestAPI';
import { ROUTES } from '../../Constants/Routes';

const Episode = () => {
    const [episode, setEpisode] = useState();
    const [count, setCount] = useState();
    const [isBlocked, setIsBlocked] = useState(false);
    const cat = 'episode';
    const id = useParams().id;

    const history = useHistory();

    console.log(episode)

    const getTheCharacters = () => {

        
        fetch(`https://rickandmortyapi.com/api/character/${episode.characters}`)
        .then(res => console.log(res))
    }


    useEffect(() => {
        getAllInfo(cat)
            .then(data => setCount(data.info.count))

        if (id < count) {
            setIsBlocked(false)
            console.log("this is from IF statement")
            getCharacter(cat, id)
                .then(data => setEpisode(data))
                .catch(err => console.error(err))
        } else {
            setIsBlocked(true)
            console.log("this is from ELSE statement")
            // history.push(ROUTES[404])
        }
    }, [id, history, count]);

    return (
        <>
            {episode &&
                <div>
                    <h1> {episode.name} </h1>
                    <h3> {episode.air_date} </h3>
                    <button onClick={getTheCharacters} >Click me</button>
                </div>
            }
        </>
    );
};

export default Episode;
