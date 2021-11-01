import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getCharacter, getAllInfo } from '../../Services/RestAPI';
import { ROUTES } from '../../Constants/Routes';

import './character.css';

const Character = () => {
    const [character, setCharacter] = useState();
    const [count, setCount] = useState();

    const cat = 'character';
    const id = useParams().id;

    const history = useHistory();

    useEffect(() => {
        getAllInfo(cat)
        .then(data => setCount(data.info.count))
        if (id < count) {
            console.log("this is from IF statement")
            getCharacter(cat, id)
                .then(data => setCharacter(data))
                .catch(err => console.error(err))
        } else {
            console.log("this is from ELSE statement")
            // history.push(ROUTES[404])
        }
    }, [id, history, count]);

    return (
        <div className="character-page-container">
            {character ?
                <div className="character-container">
                    <div className="image-div">
                        <img className="character-image" src={character.image} alt="character" />
                    </div>
                    <div className="character-info">
                        <span>{character.gender}</span>
                        <span>{character.location.name}</span>
                        <span>{character.origin.name}</span>
                        <span>{character.species}</span>
                        <span>{character.status}</span>
                        <span>{character.type}</span>
                    </div>
                </div>
                : null}
        </div>
    );
};

export default Character;
